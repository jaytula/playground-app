import type { NextPage } from 'next'
import Image from 'next/image'
import classes from '../styles/Home.module.scss'

import productImage from '../images/spirulina-image.jpg'
import productLabel from '../images/spirulina-label.jpg'

const Label = () => {
    return <div className={classes.label}>
      <Image src={productImage} width={1024} height={1024} alt="" />
      <div className={classes.labelFacts}>
        <Image src={productLabel} width={310} height={480} alt="" />
      </div>
    </div>
  
}


const Home: NextPage = () => {
  return <div className={classes.home}>
    <Label />
    <Label />
    <Label />
    <Label />
  </div>

}

export default Home
