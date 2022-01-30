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
      <form>
      <fieldset className="pc-specs">
        <legend>Pc Specs</legend>
        <label className="pc-specs-label" htmlFor="cpu">Cpu:</label>
        <input className="FormControl" name="cpu" id="cpu" type="text" bidi={this.cpu}/>
        <label className="pc-specs-label" htmlFor="ram">Ram:</label>
        <input className="FormControl" name="ram" id="ram" type="text" bidi={this.ram}/>
        <label className="pc-specs-label" htmlFor="motherboard">Motherboard:</label>
        <input className="FormControl" name="motherboard" id="motherboard" type="text" bidi={this.motherboard}/>
        <label className="pc-specs-label" htmlFor="gpu">Gpu:</label>
        <input className="FormControl" name="gpu" id="gpu" type="text" bidi={this.gpu}/>
        <label className="pc-specs-label" htmlFor="storage">Storage:</label>
        <input className="FormControl" name="storage" id="storage" type="text" bidi={this.storage}/>
        <label className="pc-specs-label" htmlFor="cabinet">Cabinet:</label>
        <input className="FormControl" name="cabinet" id="cabinet" type="text" bidi={this.cabinet}/>
        <label className="pc-specs-label" htmlFor="operating_system">S.O. :</label>
        <input className="FormControl" name="operating_system" id="operating_system" type="text" bidi={this.operating_system}/>
        <Button className="Button Button--primary" type="submit" onsubmit={this.onsubmit.bind(this)}>Save</Button>
      </fieldset>
      </form>
    )
  }



  onsubmit(e) {
    e.preventDefault();
    const user = app.session.user;
    user.save({
      cpu: this.cpu(),
      ram: this.ram(),
      motherboard:this.motherboard(),
      storage: this.storage(),
      cabinet: this.cabinet(),
      gpu: this.gpu(),
      operating_system: this.operating_system(),
    });
  }
}
