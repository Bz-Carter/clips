import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClipService } from '../services/clip.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styleUrls: ['./clips-list.component.css'],
  providers: [DatePipe]
})
export class ClipsListComponent implements OnInit {

  constructor(public clipService: ClipService) { 
    this.clipService.getClips()
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handlerScroll)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handlerScroll)
  }

  handlerScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement
    const { innerHeight } = window

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

    if (bottomOfWindow) {
      this.clipService.getClips()
    }
  }

}
