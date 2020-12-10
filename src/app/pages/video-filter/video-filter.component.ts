import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrls: ['./video-filter.component.scss']
})
export class VideoFilterComponent implements OnInit {

  @ViewChild('me') me: any;

  pc: any;
  pcPeers: {
    [k: string]: RTCPeerConnection;
  };
  localStream: any;

  constructor() {
    this.pcPeers = {};
  }

  ngOnInit(): void {
  }

  startVideo(): void {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        this.localStream = stream;
        this.me.nativeElement.srcObject = stream;
        this.me.nativeElement.muted = true;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
