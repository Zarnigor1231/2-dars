import React from 'react'

// img
import  Paris from './img/Paris.png'

function MainTopArr() {
  return (
    <ul className='box-item'>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Photography</p>
            <h3 className='item-text'>Helmut Lang celebrates taxi drivers worldwide in latest campaign</h3>
            <a className='author-link' href="/">By Alessandra Ortiz</a>
        </li>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Photography</p>
            <h3 className='item-text'>Bowlcut launch a new summer collection that pays homage to “UK legends”</h3>
            <a className='author-link' href="/">By Rosanna Ondricka</a>
        </li>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Photography</p>
            <h3 className='item-text'>Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn</h3>
            <a className='author-link' href="/">By Annie Lueilwitz</a>
        </li>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Interactive Design</p>
            <h3 className='item-text'>London-based Yinka Ilori’s storytelling furniture</h3>
            <a className='author-link' href="/">By Annie Lueilwitz</a>
        </li>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Graphic Design</p>
            <h3 className='item-text'>Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck</h3>
            <a className='author-link' href="/">By Simeon Brekke</a>
        </li>
        <li className='item-list'>
            <img className='item-img' src={Paris} width='384' height='252' alt="Helmut Lang celebrates taxi drivers worldwide in latest campaign" />
            <p className='top-illustration'>Architecture</p>
            <h3 className='item-text'>Suzanne Saroff’s meticulously arranged photographs alter perceptions</h3>
            <a className='author-link' href="/">By Reta Torphy</a>
        </li>
    </ul>
  )
}

export default MainTopArr