import React, { Component } from 'react';
import styles from './styles.css';

class scoreCount extends Component {
  state = {  }
  render() {
    return (
      <div>
        <div className='players'>
          <p> Player 1</p>
          <p> Player 2</p>
        </div>
        <div className='scoreBoard'>
          <div>
            <h1>{this.props.leftScore}</h1>
          </div>
          <div className='scoreMiddle'>
            <div className='arrows'>
              <button><i className="fa fa-caret-up fa-lg"></i></button>
              <button><i className="fa fa-caret-down fa-lg"></i></button>
            </div>
            <div>
              <p>
                vs
              </p>
            </div>
            <div className='arrows'>
              <button><i className="fa fa-caret-up fa-lg"></i></button>
              <button><i className="fa fa-caret-down fa-lg"></i></button>
            </div>
          </div>
          <div>
            <h1>{this.props.rightScore}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default scoreCount;

// const ScoreCount = ({ children, leftScore, rightScore }) => (
//   <div>
//     <div className='players'>
//       <p> Player 1</p>
//       <p> Player 2</p>
//     </div>
//     <div className='scoreBoard'>
//       <div>
//         <h1>{leftScore}</h1>
//       </div>
//       <div className='scoreMiddle'>
//         <div className='arrows'>
//           <button><i className="fa fa-caret-up fa-lg"></i></button>
//           <button><i className="fa fa-caret-down fa-lg"></i></button>
//         </div>
//         <div>
//           <p>
//             vs
//           </p>
//         </div>
//         <div className='arrows'>
//           <button><i className="fa fa-caret-up fa-lg"></i></button>
//           <button><i className="fa fa-caret-down fa-lg"></i></button>
//         </div>
//       </div>
//       <div>
//         <h1>{rightScore}</h1>
//       </div>
//     </div>
//   </div>
// );
// export default ScoreCount;
