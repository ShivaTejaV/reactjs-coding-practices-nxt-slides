import {Component} from 'react'

import Header from '../Header'
import MiniSlide from '../MiniSlide'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class Home extends Component {
  state = {
    slidesList: initialSlidesList,
    currentSlideId: initialSlidesList[0].id,
  }

  renerSlideList = () => {
    const {slidesList} = this.state
    return (
      <ol className="slides-ol">
        {slidesList.map(each => (
          <li className="container-mini-slide">
            <h1 className="heading">{each.heading}</h1>
            <p className="description">{each.description}</p>
          </li>
        ))}
      </ol>
    )
  }

  render() {
    const {slidesList} = this.state
    // console.log(slidesList)
    return (
      <div>
        <Header />
        {this.renerSlideList()}
      </div>
    )
  }
}
export default Home
