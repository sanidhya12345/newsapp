import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-4'>
        <h2>Khabar Khazana Top Headlines</h2>
        <div className='row'>
            <div className='col-md-4'>
                <NewsItem title="myTitle" description="mydescription" imageURL="https://cdn.vox-cdn.com/thumbor/odhU8J-I_wYfKeE92zN0QHZG280=/0x272:2737x1705/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25652202/2175787633.jpg"></NewsItem>
            </div>
            <div className='col-md-4'>
                <NewsItem title="myTitle" description="mydescription"></NewsItem>
            </div>
            <div className='col-md-4'>
                <NewsItem title="myTitle" description="mydescription"></NewsItem>
            </div>
            <div className='col-md-4'>
                <NewsItem title="myTitle" description="mydescription"></NewsItem>
            </div>
        </div>
      </div>
    )
  }
}

export default News
