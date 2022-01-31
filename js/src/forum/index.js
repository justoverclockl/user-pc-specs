import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import AddPcSpecsFields from './components/AddPcSpecsFields';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('justoverclock/user-pc-specs', () => {
  User.prototype.cpu = Model.attribute('cpu');
  User.prototype.motherboard = Model.attribute('motherboard');
  User.prototype.ram = Model.attribute('ram');
  User.prototype.gpu = Model.attribute('gpu');
  User.prototype.storage = Model.attribute('storage');
  User.prototype.cabinet = Model.attribute('cabinet');
  User.prototype.operating_system = Model.attribute('operating_system');

  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    items.add('pcSpecs', <AddPcSpecsFields />);
  });
  extend(CommentPost.prototype, 'footerItems', function (items) {
    const imgPath = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-user-pc-specs/';
    const user = this.attrs.post.user();
    if (!user) return;
    items.add(
      'pcSpecs',
      <div className="pcSpecs-container">
        <div className="pc-specs" title={user.cpu()} id="cpu">
          <img className="pc-specs-img" src={imgPath + 'cpu.png'} alt={user.cpu()} />
          {user.cpu()}
        </div>
        <div className="pc-specs" title={user.ram()} id="ram">
          <img className="pc-specs-img" src={imgPath + 'ram.png'} alt={user.ram()} />
          {user.ram()}
        </div>
        <div className="pc-specs" title={user.motherboard()} id="motherboard">
          <img className="pc-specs-img" src={imgPath + 'motherboard.png'} alt={user.motherboard()} />
          {user.motherboard()}
        </div>
        <div className="pc-specs" title={user.gpu()} id="gpu">
          <img className="pc-specs-img" src={imgPath + 'gpu.png'} alt={user.gpu()} />
          {user.gpu()}
        </div>
        <div className="pc-specs" title={user.storage()} id="storage">
          <img className="pc-specs-img" src={imgPath + 'hdd.png'} alt={user.storage()} />
          {user.storage()}
        </div>
        <div className="pc-specs" title={user.cabinet()} id="cabinet">
          <img className="pc-specs-img" src={imgPath + 'case.png'} alt={user.cabinet()} />
          {user.cabinet()}
        </div>
        <div className="pc-specs" title={user.operating_system()} id="operating-system">
          <img className="pc-specs-img" src={imgPath + 'windows.png'} alt={user.operating_system()} />
          {user.operating_system()}
        </div>
      </div>
    );
  });
  extend(CommentPost.prototype, 'oncreate', function () {
    const user = this.attrs.post.user();
    const cpuEl = document.getElementById('cpu');
    const ramEl = document.getElementById('ram');
    const moboEl = document.getElementById('motherboard');
    const gpuEl = document.getElementById('gpu');
    const storageEl = document.getElementById('storage');
    const cabinetEl = document.getElementById('cabinet');
    const soEl = document.getElementById('operating-system');

    if (user.cpu() === '') {
      cpuEl.remove();
    }
    if (user.ram() === '') {
      ramEl.remove();
    }
    if (user.motherboard() === '') {
      moboEl.remove();
    }
    if (user.gpu() === '') {
      gpuEl.remove();
    }
    if (user.storage() === '') {
      storageEl.remove();
    }
    if (user.cabinet() === '') {
      cabinetEl.remove();
    }
    if (user.operating_system() === '') {
      soEl.remove();
    }
  });
});
