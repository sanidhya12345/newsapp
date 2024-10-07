import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles=[{
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Irene Nasser, Lucas Lilieholm, Lex Harvey",
    "title": "Live updates: Israel vows response to Iran missile attack, strikes continue in Lebanon, Gaza - CNN",
    "description": "Iran on Tuesday launched a massive missile attack on Israel in response to the killing of Hezbollah leader Hassan Nasrallah and others. Follow for live news updates.",
    "url": "https://www.cnn.com/world/live-news/israel-iran-missile-attack-middle-east-10-02-24-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2175298774.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2024-10-02T08:26:00Z",
    "content": "The Israeli military is sending an additional division to participate in the ground war in southern Lebanon, it announced Wednesday.\r\nThe size of Israeli military units are classified, but a division… [+1983 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Steven Scheer, Parisa Hafezi, Timour Azhari",
    "title": "Israel reinforces military presence in Lebanon after Iran attack - Reuters",
    "description": "The Israeli military said that regular infantry and armoured units were joining ground operations in southern Lebanon, stepping up pressure on Hezbollah.",
    "url": "https://www.reuters.com/world/middle-east/iran-says-it-has-finished-attack-israel-amid-fears-spreading-conflict-2024-10-02/",
    "urlToImage": "https://www.reuters.com/resizer/v2/DA22APD4ZRLRHGV7ZGAGEH2NEI.jpg?auth=07939cf56c6bef58e83dee51f5af423dcdc51334e7834006bd88fd87e3f5af49&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-10-02T07:42:45Z",
    "content": "JERUSALEM/BEIRUT, Oct 2 (Reuters) - The Israeli military said on Wednesday that regular infantry and armoured units were joining ground operations in southern Lebanon, stepping up pressure on Hezboll… [+5544 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Karen Gilchrist",
    "title": "European markets open slightly higher as investors look beyond Middle East tensions - CNBC",
    "description": "European stocks were slightly higher Wednesday as investors attempted to look beyond escalating tensions in the Middle East.",
    "url": "https://www.cnbc.com/2024/10/02/european-markets-stocks-news-data-and-earnings.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108041618-17278027682024-10-01t171222z_670747380_rc2tbaaoy6as_rtrmadp_0_israel-palestinians-lebanon.jpeg?v=1727802790&w=1920&h=1080",
    "publishedAt": "2024-10-02T05:56:26Z",
    "content": "LONDON European stocks were slightly higher Wednesday as investors attempted to look beyond escalating tensions in the Middle East and await fresh employment data out of the region.The pan-European S… [+1837 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": null,
    "title": "Takeaways from the VP debate: a muted mic, abortion and civility - BBC.com",
    "description": "Vance and Walz focused their attacks on Harris and Trump's plans on the economy, immigration and abortion.",
    "url": "https://www.bbc.com/news/articles/crr5j1q8wlno",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/decc/live/99fd7bb0-8075-11ef-822c-a50726bfda2e.jpg",
    "publishedAt": "2024-10-02T05:33:14Z",
    "content": "Watch key moments from the US vice-presidential debate\r\nOn Tuesday night, JD Vance and Tim Walz launched attacks on their presidential opponents and sparred over international conflict, the US econom… [+5293 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "Sean ‘Diddy’ Combs accused of sexual misconduct by 120 people, says lawyer - Al Jazeera English",
    "description": "The hip-hop star has pleaded not guilty to charges of sex trafficking and racketeering conspiracy in a New York court.",
    "url": "https://www.aljazeera.com/news/2024/10/2/sean-diddy-combs-accused-of-sexual-misconduct-by-120-people-says-lawyer",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/AP24058140798974-1711442034.jpg?resize=1200%2C675",
    "publishedAt": "2024-10-02T05:04:47Z",
    "content": "A lawyer has claimed he is representing 120 people who have come forward with sexual assault allegations levelled at Sean Diddy Combs.\r\nHouston lawyer Tony Buzbee said on Tuesday he expected lawsuits… [+3372 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "SAM MEDNICK",
    "title": "Sex workers find themselves at the center of Congo’s mpox outbreak - The Associated Press",
    "description": "Sex workers are among those hardest-hit by the mpox outbreak in eastern Congo's Kamituga town. An estimated 40,000 sex workers reside there. Many of them are single mothers driven by poverty to this mineral-rich commercial hub where gold miners comprise the m…",
    "url": "https://apnews.com/article/mpox-outbreak-sex-workers-miners-kamituga-congo-5f6f3c7e9f0abd1917f8daf41678ea2b",
    "urlToImage": "https://dims.apnews.com/dims4/default/b3ee097/2147483647/strip/true/crop/6240x3510+0+325/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb9%2Fab%2F5a436f5ddef98fe6aff74b55c7df%2Fdc9fe066dfde48acb26e74f037b19d8e",
    "publishedAt": "2024-10-02T04:45:00Z",
    "content": "KAMITUGA, Congo (AP) Its been four months since Sifa Kunguja recovered from mpox, but as a sex worker, she said, shes still struggling to regain clients, with fear and stigma driving away people whov… [+8131 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Gabrielle Ng, Katya Golubkova",
    "title": "Oil prices jump more than $1 as Middle East tensions escalate - Reuters",
    "description": "Oil prices jumped by over a dollar on Wednesday due to rising concerns Middle East tensions could escalate, potentially disrupting crude output from the region, following Iran's biggest ever military blow against Israel.",
    "url": "https://www.reuters.com/markets/commodities/oil-prices-rise-more-than-1-escalating-tensions-middle-east-2024-10-01/",
    "urlToImage": "https://www.reuters.com/resizer/v2/GFYI73NWVFLF5CZBRA3EFIOFJY.jpg?auth=a7543432adecde96204418fdf7d0494f1a3aeb4c1464c36bb04ae7f91fea793d&height=1005&width=1920&quality=80&smart=true",
    "publishedAt": "2024-10-02T04:37:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Space.com"
    },
    "author": "Daisy Dobrijevic",
    "title": "Annular solar eclipse will turn the sun into a glorious 'ring of fire' today. Here's what you need to know. - Space.com",
    "description": "Today (Oct. 2), the moon and sun will create a \"ring of fire\" during an annular solar eclipse. Here's how and when to catch the spectacular phenomenon.",
    "url": "https://www.space.com/annular-solar-eclipse-2024-today-ring-of-fire-what-you-need-to-know",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/u2Yi3jrv3vkYY5CRLRNDZY-1200-80.jpg",
    "publishedAt": "2024-10-02T04:01:43Z",
    "content": "Today (Oct. 2), an annular solar eclipse\r\n will begin its journey across parts of the Pacific Ocean, southern Chile and southern Argentina. \r\nIf you're unable to see the eclipse in person, you can wa… [+4226 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Derick Waller, Christine Sloan",
    "title": "Picket lines form as port strike begins for thousands of New York and New Jersey dockworkers - CBS New York",
    "description": "A port strike has thousands of dockworkers on the picket lines along the East and Gulf coasts​, including New York and New Jersey.",
    "url": "https://www.cbsnews.com/newyork/news/port-strike-2024-new-york-new-jersey-dockworkers/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/10/01/c93e40b9-9f86-4f30-be5f-4b660f10285a/thumbnail/1200x630/6149c6ec1ab5ff68d48e96b1f6cd4502/gettyimages-2175263800.jpg?v=fa529222a2be3543711c1a879b51e860",
    "publishedAt": "2024-10-02T03:48:00Z",
    "content": "ELIZABETH, N.J. — A port strike has more than 20,000 dockworkers off the job and onto the picket line along the East and Gulf coasts, including at the ports of New York and New Jersey.\r\nBillions of d… [+5052 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Patrick Svitek",
    "title": "JD Vance’s mic is muted during debate exchange on immigration - The Washington Post",
    "description": "The moment came as the candidates were discussing the legal status of Haitian immigrants in Springfield, Ohio.",
    "url": "https://www.washingtonpost.com/politics/2024/10/01/vp-debate-mic-muted-vance-cbs-fact-check-immigration/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4UFO6TR3OS644T56WSP6XWIHHE_size-normalized.JPG&w=1440",
    "publishedAt": "2024-10-02T03:44:25Z",
    "content": "The microphone of Republican vice-presidential candidate JD Vance was muted Tuesday night during a debate when he sought to dispute an effort by moderators to fact-check his claims about immigration.… [+1688 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "JOSH BOAK, DIDI TANG",
    "title": "Walz misleadingly claims to have been in Hong Kong during period tied to Tiananmen Square massacre - The Associated Press",
    "description": "Multiple news reports indicate that Democratic vice presidential nominee Minnesota Gov. Tim Walz misleadingly claimed he was in Hong Kong during the turbulence surrounding the 1989 Tiananmen Square massacre, part of a broader pattern of inaccuracies that Repu…",
    "url": "https://apnews.com/article/walz-china-tiananmen-square-protests-8d433bf7184e8c430aa31d1f5460fe87",
    "urlToImage": "https://dims.apnews.com/dims4/default/ac23e52/2147483647/strip/true/crop/5608x3155+0+292/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2f%2F99%2Fc8bce51c1a82ebdbeb604150f0da%2Fe59cf72f9fe348b0aacfb5325c76eb80",
    "publishedAt": "2024-10-02T03:11:00Z",
    "content": "WASHINGTON (AP) Multiple news reports indicate that Democratic vice presidential nominee Minnesota Gov. Tim Walz misleadingly claimed he was in Hong Kong during the turbulence surrounding the 1989 Ti… [+3959 chars]"
    }]
  constructor() {
    super();
    console.log("inside constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("inside component did mount")
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d2369ccb83344afaa218c6dc65a928a5"
    let data= await fetch(url);
    let parsedData=data.json();
    console.log(parsedData)
    this.setState({articles:parsedData.articles})
  }
  render() {
    console.log("inside render")
    return (
      <div className="container my-4">
        <h2>Khabar Khazana Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem 
                title={element.title.slice(0,40)}
                description={element.description.slice(0,80)}
                imageURL={element.urlToImage}
                newsUrl={element.url}
              ></NewsItem>
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
