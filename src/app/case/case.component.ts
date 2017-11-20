import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes,RouterOutlet } from '@angular/router';

@Component({
  selector: 'case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],

})
export class CaseComponent implements OnInit{
  isVisible:boolean = false;
  picurl:string = '';
  title:string='';
  url:string='';
  result:Array<any>  = [
    { picurl: './assets/images/1.jpg',
      title:'安徽天天划信息科技有限公司',
      url: 'http://www.ahtth365.com/'
    },
    { picurl: './assets/images/2.jpg',
      title:'安徽优科新材料科技有限公司',
      url: 'http://www.uctec.cn/'
    },
    { picurl: './assets/images/3.jpg',
      title:'当代视觉',
      url: 'http://www.massyw.com/'
    },
    { picurl: './assets/images/4.jpg',
      title:'Aurey Australia Pty Ltd',
      url: 'http://aureyaustralia.com/'
    },
    { picurl: './assets/images/5.jpg',
      title:'我的世界chinajoy狂欢派对专题',
      url: 'http://www.youxibao.com/mc/2016cj/'
    },
    { picurl: './assets/images/6.jpg',
      title:'南京出版社',
      url: 'http://www.njcbs.cn/#/indexs'
    }
  ];

  showModal = () => {
    this.isVisible = true;
  }


  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

  ngOnInit() {
    this.title = '马鞍山师范高等专科学校';
    //this.picurl = '../../assets/images/1.jpg';
    //this.url = 'http://61.191.176.123:8081/zongwuchu';
  }

}
