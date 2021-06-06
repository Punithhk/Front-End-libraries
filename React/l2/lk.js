/*This challenge has you modifying two lifecycle methods componentDidMount and componentWillUnmount. You use componentDidMount when you want to set something up, in your case, an event listener. You use componentWillUnmount when you need to clear that something, your event listener.

You will add an event listener to the componentDidMount method that will listen to a “keydown” event. Use document.addEventListener(event, function, optional(useCapture)). Then remove this same event listener by passing in the same arguments into document.removeEventListener(event, function, optional(useCapture)) within the componentWillUnmount method.

Note: document.addEventListener and document.removeEventListener will take in a quoted string for its event, and when passing in the function you will reference the function handleKeyPress() as this.handleKeyPress. If you invoke the function as this.handleKeyPress(), the event listener will evaluate the function first and will pass back a value of undefined.*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'key pressed'
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
        document.addEventListener("keydown",this.handleKeyPress);
    }
    componentWillUnmount() {
    document.removeEventListener("keydown",this.handleKeyPress);
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };