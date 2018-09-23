import { SynchronizationState } from './../../models/synchronizedStateEnum';
import { Injectable } from '@angular/core';
import { DirectoryItem } from '../../models/directoryItem';
import { Select } from 'ionic-angular';

@Injectable()
export class Utils {

  constructor() { }

  isFolder(item: DirectoryItem) {
    return item.type === 1;
  }

  syncStatusDesc(state: SynchronizationState) {
    switch(state) {
      case SynchronizationState.None: {
        return 'Not synchronized';
      }
      case SynchronizationState.Partial: {
        return 'Downloaded partially';
      }
      case SynchronizationState.Waiting: {
        return 'Waiting...';
      }
      case SynchronizationState.Progress: {
        return 'Downloading...';
      }
      case SynchronizationState.Full: {
        return 'Downloaded';
      }
    }
  }

}
