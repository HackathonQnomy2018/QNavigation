import { NavigationGridModule } from './navigation-grid.module';

describe('NavigationGridModule', () => {
  let navigationGridModule: NavigationGridModule;

  beforeEach(() => {
    navigationGridModule = new NavigationGridModule();
  });

  it('should create an instance', () => {
    expect(navigationGridModule).toBeTruthy();
  });
});
