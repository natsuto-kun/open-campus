import Image from 'next/image'
import { Button } from '../components/Button/Button'
import "./mainpage.css"
import { LikeButton } from '../components/LikeButton/LikeButton'
import { Header } from '@/components/Header/Header'
import { H2 } from '@/components/H2/H2'
import { ToggleButton } from '@/components/Toggle/Toggle'
import { RadioButton } from '@/components/RadioButton/RadioButton'
import { CheckBox } from '@/components/CheckBox/CheckBox'
import { Accordion } from '@/components/Accordion/Accordion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Header></Header>
      <div className="wrapper">
        <H2></H2>
        <Button></Button>
        <ToggleButton></ToggleButton>
        <RadioButton></RadioButton>
        <CheckBox></CheckBox>
        <Accordion></Accordion>
      </div>
    </main>
  )
}
