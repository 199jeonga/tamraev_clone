import React,{Fragment} from 'react'
import ElectronicSearchBox from '../component/ElectronicSearchBox';
import ElectronicMapBox from '../component/ElectronicMapBox';

export default function ElectronicList() {
  return (
    <Fragment>
      <ElectronicSearchBox />
      <ElectronicMapBox />
    </Fragment>
  )
}
