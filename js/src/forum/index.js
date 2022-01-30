import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import AddPcSpecsFields from "./components/AddPcSpecsFields";

app.initializers.add('justoverclock/user-pc-specs', () => {

  User.prototype.cpu = Model.attribute('cpu');
  User.prototype.motherboard = Model.attribute('motherboard');
  User.prototype.ram = Model.attribute('ram');
  User.prototype.gpu = Model.attribute('gpu');
  User.prototype.storage = Model.attribute('storage');
  User.prototype.cabinet = Model.attribute('cabinet');
  User.prototype.operating_system = Model.attribute('operating_system');

  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    items.add(
      'pcSpecs',
        <AddPcSpecsFields />
      );
  });
});
