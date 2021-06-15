
describe('Monitor', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('If device, should show the device name', async () => {
    await expect(element(by.text('Device NAME'))).toExist();
    await expect(element(by.id('NAME'))).toHaveText('iOS');
  });

  it('If not allow GPS should show message error', async () => {
    await expect(element(by.text('Permission to access location was denied'))).toExist();
  });

  it('If GPS allowed not show message error', async () => {
    await expect(element(by.text('Permission to access location was denied'))).not.toExist();
  });
  
});