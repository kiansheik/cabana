import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PlayButton extends Component {
  static propTypes = {
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    isPlaying: PropTypes.bool,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {'hover': false};

    this.onClick = this.onClick.bind(this);
  }

  imageSource() {
    const {hover} = this.state;
    const {isPlaying} = this.props;
    if(isPlaying) {
      if(hover) {
        return ("/img/ic_pause_circle_filled_white_24px.svg");
      } else {
        return ("/img/ic_pause_circle_outline_white_24px.svg");
      }
    } else {
      if(hover) {
        return ("/img/ic_play_circle_filled_white_24px.svg");
      } else {
        return ("/img/ic_play_circle_outline_white_24px.svg");
      }
    }
  }

  onClick(e) {
    let {isPlaying} = this.props;
    isPlaying = !isPlaying;

    if(isPlaying) {
      this.props.onPlay();
    } else {
      this.props.onPause();
    }
  }

  render() {
    return <img src={this.imageSource()}
                className={this.props.className}
                onClick={this.onClick}
                onMouseOver={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})} />;
  }
}
