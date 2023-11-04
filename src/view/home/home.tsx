import React from 'react'
import { CardHeader, SingleProduct, Slider } from 'components'
import './home.scss'

const Home: React.FC = () => {
  return (
    <div className="te__home">
      <div className="te__container">

        <div className="te__promotion--slider mb-1">
          <Slider />
        </div>

        <div className="te__category-product">
          <CardHeader title="New Arrival" />

          <div className="te__category-product--list">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any) => {
                return <SingleProduct key={item} />
              })
            }
          </div>
        </div>

        <div className="te__category-product">
          <CardHeader title="Featured" />

          <div className="te__category-product--list">
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: any) => {
                return <SingleProduct key={item} />
              })
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home