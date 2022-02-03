import app from 'flarum/forum/app';
import Component from 'flarum/Component';
import Stream from 'flarum/common/utils/Stream';
import Button from 'flarum/common/components/Button';

export default class AddPcSpecsFields extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.cpu = Stream(app.session.user.cpu());
    this.ram = Stream(app.session.user.ram());
    this.motherboard = Stream(app.session.user.motherboard());
    this.gpu = Stream(app.session.user.gpu());
    this.storage = Stream(app.session.user.storage());
    this.cabinet = Stream(app.session.user.cabinet());
    this.operating_system = Stream(app.session.user.operating_system());
  }

  view(vnode) {
    return (
      <form onsubmit={this.onsubmit.bind(this)}>
        <fieldset className="pc-specs">
          <legend>Pc Specs</legend>
          <label className="pc-specs-label" htmlFor="cpu">
            {app.translator.trans('justoverclock-user-pc-specs.forum.cpu')}
          </label>
          <input className="FormControl" name="cpu" id="cpu" type="text" value={this.cpu} bidi={this.cpu} />
          <label className="pc-specs-label" htmlFor="ram">
            {app.translator.trans('justoverclock-user-pc-specs.forum.ram')}
          </label>
          <input className="FormControl" name="ram" id="ram" type="text" value={this.ram} bidi={this.ram} />
          <label className="pc-specs-label" htmlFor="motherboard">
            {app.translator.trans('justoverclock-user-pc-specs.forum.motherboard')}
          </label>
          <input className="FormControl" name="motherboard" id="motherboard" type="text" value={this.motherboard} bidi={this.motherboard} />
          <label className="pc-specs-label" htmlFor="gpu">
            {app.translator.trans('justoverclock-user-pc-specs.forum.gpu')}
          </label>
          <input className="FormControl" name="gpu" id="gpu" type="text" value={this.gpu} bidi={this.gpu} />
          <label className="pc-specs-label" htmlFor="storage">
            {app.translator.trans('justoverclock-user-pc-specs.forum.storage')}
          </label>
          <input className="FormControl" name="storage" id="storage" type="text" value={this.storage} bidi={this.storage} />
          <label className="pc-specs-label" htmlFor="cabinet">
            {app.translator.trans('justoverclock-user-pc-specs.forum.cabinet')}
          </label>
          <input className="FormControl" name="cabinet" id="cabinet" type="text" value={this.cabinet} bidi={this.cabinet} />
          <label className="pc-specs-label" htmlFor="operating_system">
            {app.translator.trans('justoverclock-user-pc-specs.forum.so')} :
          </label>
          <input
            className="FormControl"
            name="operating_system"
            id="operating_system"
            type="text"
            value={this.operating_system}
            bidi={this.operating_system}
          />
          <Button className="Button Button--primary pc-specs" type="submit">
            {app.translator.trans('justoverclock-user-pc-specs.forum.savePcSpecs')}
          </Button>
        </fieldset>
      </form>
    );
  }

  onsubmit(e) {
    e.preventDefault();
    const user = app.session.user;
    user
      .save({
        cpu: this.cpu(),
        ram: this.ram(),
        motherboard: this.motherboard(),
        storage: this.storage(),
        cabinet: this.cabinet(),
        gpu: this.gpu(),
        operating_system: this.operating_system(),
      })
      .then(() => app.alerts.show({type: 'success'}, app.translator.trans('justoverclock-user-pc-specs.forum.specsSaved')));
  }
}
