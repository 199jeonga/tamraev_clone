import React,{Fragment} from 'react'
import InfoViewBox from '../component/InfoViewBox';
import InfoConBox from '../component/InfoConBox';
import '../style/subInfo.scss';

export default function Info() {
  return (
    <Fragment>
      <InfoViewBox />
      <InfoConBox />
    </Fragment>
  )
}
