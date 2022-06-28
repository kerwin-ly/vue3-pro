export type EventBusListener<T = unknown, P = SafeAny> = (event: T, payload?: P) => void;
export type EventBusEvents<T, P = SafeAny> = EventBusListener<T, P>[];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type EventBusKey<T> = symbol;

export type EventBusIdentifier<T = unknown> = EventBusKey<T> | string | number;

export interface UseEventBusReturn<T, P> {
  /**
   * Subscribe to an event. When calling emit, the listeners will execute.
   * @param listener watch listener.
   * @returns a stop function to remove the current callback.
   */
  on: (listener: EventBusListener<T, P>) => Fn;
  /**
   * Similar to `on`, but only fires once
   * @param listener watch listener.
   * @returns a stop function to remove the current callback.
   */
  once: (listener: EventBusListener<T, P>) => Fn;
  /**
   * Emit an event, the corresponding event listeners will execute.
   * @param event data sent.
   */
  emit: (event?: T, payload?: P) => void;
  /**
   * Remove the corresponding listener.
   * @param listener watch listener.
   */
  off: (listener: EventBusListener<T>) => void;
  /**
   * Clear all events
   */
  reset: () => void;
}

export const events = new Map<EventBusIdentifier<SafeAny>, EventBusEvents<SafeAny>>();

export function useEventBus<T = unknown, P = SafeAny>(key: EventBusIdentifier<T>): UseEventBusReturn<T, P> {
  // const scope = getCurrentScope();

  function on(listener: EventBusListener<T, P>) {
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);

    const _off = () => off(listener);
    // auto unsubscribe when scope get disposed
    // @ts-expect-error vue3 and vue2 mis-align
    scope?.cleanups?.push(_off);
    return _off;
  }

  function once(listener: EventBusListener<T, P>) {
    function _listener(...args: any[]) {
      off(_listener);
      // @ts-expect-error cast
      listener(...args);
    }
    return on(_listener);
  }

  function off(listener: EventBusListener<T>): void {
    const listeners = events.get(key);
    if (!listeners) return;

    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
    if (!listeners.length) events.delete(key);
  }

  function reset() {
    events.delete(key);
  }

  function emit(event?: T, payload?: P) {
    events.get(key)?.forEach((v) => v(event, payload));
  }

  return { on, once, off, emit, reset };
}
