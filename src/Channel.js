import React, {Component} from 'react';
import './Channel.css';

class Channel extends Component{
  constructor(props) {
      super(props);

      this.state = {
        avatar: "avatarUD.png",
        name: "Universo Discreto",
        description: "Computação",
        channelId: 0
      };
    };

  changeChannel = () => {
    if(this.state.channelId == 0){
      this.setState({
        avatar: "avatarMDM.jpg",
        name: "Manual do Mundo",
        description: "Tecnologia e Ciência",
        channelId: 1
      });
    }else if(this.state.channelId == 1){
      this.setState({
        avatar: "avatarLOH.jpg",
        name: "Leitura Obrigahistória",
        description: "História",
        channelId: 2
      });
    }else if(this.state.channelId == 2){
      this.setState({
        avatar: "avatarUD.png",
        name: "Universo Discreto",
        description: "Computação",
        channelId: 0
      });
    }
  }

  render(props){
    const styleCard = {
      width: '100%',
    };

    return(
      <div className="card">
        <img src={this.state.avatar} alt={`Avatar do canal ${this.state.name}`} style={styleCard}/>
        <div className="container">
          <h4><b>{this.state.name}</b></h4>
          <p>{this.state.description}</p>
        </div>
        <button type="button" onClick={this.changeChannel}>Mudar Canal</button>
      </div>
    );
  }
}

export default Channel;
