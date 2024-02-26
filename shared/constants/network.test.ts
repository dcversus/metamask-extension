import { existsSync } from 'fs';
import { join } from 'path';
import {
  CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP,
  CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP_DARK_MODE,
} from './network';

describe('NetworkConstants', () => {
  it('has images files that exist for defined networks', () => {
    Object.values(CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP).forEach((image) =>
      expect(existsSync(join('app', image))).toBe(true),
    );
  });

  it('has images files that exist for defined networks in dark mode', () => {
    Object.values(CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP_DARK_MODE).forEach(
      (image) => expect(existsSync(join('app', image))).toBe(true),
    );
  });
});
