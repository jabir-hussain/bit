import { Observable } from 'rxjs';
import WatchComponents from '../consumer/component-ops/watch-components';
import { BitId as ComponentId } from '../bit-id';

export default class Watch extends WatchComponents {
  constructor(private legacyWatcher: WatchComponents) {
    super(true);
  }

  private watcher: WatchComponents | null = null;

  async _handleChange(path: string, isNew: boolean): Promise<any> {
    return '';
  }

  watch(componentIds: ComponentId[] = []) {
    // if (watcher) return this.
    // this.watcher = this.legacyWatcher.watchAll();

    return new Observable(subscriber => {
      subscriber.next();
    });
  }
}
