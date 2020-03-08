/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react';
import $ from 'jquery';
import url from './audio/gbqq.mp3';

class Main extends Component {
  state = {
    date: {}
  };
  componentDidMount() {
    this.print();
    setInterval(() => {
      this.time(2017, 10, 20);
    }, 1000);
    var audio = document.getElementById('audio');
    setTimeout(() => audio.play(), 3000);
  }
  print = () => {
    $.fn.autotype = function() {
      var _this = $(this);
      var str = _this.html();
      str = str.replace(/(\s){2,}/g, '$1');
      var index = 0;
      $(this).html('');
      var timer = function fn() {
        var args = arguments;
        var current = str.slice(index, index + 1);
        if (current == '<') {
          index = str.indexOf('>', index) + 1;
        } else {
          index++;
        }
        if (index < str.length - 1) {
          _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
        } else {
          _this.html(str.substring(0, index));
          clearTimeout(timer);
        }
        setTimeout(fn, 100);
      };
      setTimeout(timer, 500);
    };
    $('#autotype').autotype();
  };
  time = (year, month, day) => {
    var dateNow = new Date();
    var dateJNR = new Date(year, month - 1, day);
    var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
    var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
    var minute = parseInt(((dateNow - dateJNR) / (1000 * 60)) % 60);
    var second = parseInt(((dateNow - dateJNR) / 1000) % 60);
    this.setState({
      date: { d: d, hour: hour, minute: minute, second: second }
    });
  };
  render() {
    const date = () => {
      if (this.state.date.d !== undefined) {
        const { d, hour, minute, second } = this.state.date;
        return (
          <p>
            Chúng mình đã bên nhau: <span className="date-text">{d}</span> Ngày{' '}
            <span className="date-text">{hour}</span> Giờ{' '}
            <span className="date-text">{minute}</span> Phút{' '}
            <span className="date-text">{second}</span> Giây{' '}
          </p>
        );
      }
    };
    return (
      <div className="App animated bounceInLeft">
        <div className="date">{date()}</div>
        <div id="autotype" style={{ marginTop: '40px' }}>
          <h1 style={{ fontWeight: 900 }}>Gửi người con gái anh yêu</h1>
          <p>Hôm nay là 8-3, ngày của con gái đó ạ ^_^</p>
          <p>
            Chúc em sẽ mãi là đóa hoa hồng (hoa hường), luôn luôn phải cười thật
            tươi với đôi má đáng yêu nha{' '}
            <span style={{ color: 'red' }}>&hearts;</span>.
          </p>
          <p>
            Em là người con gái tuyệt nhất đời anh mà anh cần phải trân trọng.
            Anh muốn cố gắng hết mình để sau này còn được chăm sóc em, luôn cho
            em những điều hạnh phúc nhất.
          </p>
          <p>
            Những ngày ở một mình, anh cũng biết nấu ăn chút chút rồi đó. Sau
            này về với em, anh sẽ nấu cho em ăn nha, em sẽ chạy lon ton vào bếp
            ôm anh từ đằng sau này{' '}
            <span style={{ color: 'red' }}>&hearts;</span>, rồi ngồi chơi game
            đợi anh nấu xong ạ!
          </p>
          <p>
            8-3 là ngày Nữ Quyền đó, là phải đòi công bằng quyền cho con gái. Để
            anh đòi quyền công bằng cho em nha "hí hí".
          </p>
          <p>
            Anh sẽ đòi bằng cách sau này giúp đỡ em gánh vác việc nhà, không để
            mình em với bàn tay xinh xinh phải đi làm mệt xong lại về quần quật
            tiếp đâu. Trong cuộc sống luôn tôn trọng, yêu thương em, không được
            "láo nháo" với em ạ! <span style={{ color: 'red' }}>&hearts;</span>{' '}
            Còn vũ phu với em thì chắc anh không bao giờ để xảy ra đâu nên em
            yên tâm đeeeee ạ!
          </p>
          <p>
            Anh xin lỗi! Anh có đôi lúc làm em buồn nhiều, hay phải khóc tủi
            thân. Tại anh vẫn còn nhiều tính xấu chưa sửa hết được "(em cố mà
            thích nghi nha hihi)". Anh đùa thôi chứ anh vẫn đang khắc phục dần
            dần mà nhỉ?
          </p>
          <p>
            Em ngoan ngoãn ở nhà đợi anh về với em nhé! Anh sẽ trưởng thành hơn,
            sẽ luôn vòng tay ấm êm cho em cảm thấy an toàn hơn ạ!{' '}
            <span style={{ color: 'red' }}>&hearts;</span>
          </p>
          <div style={{ textAlign: 'right' }}>
            <p>Anh yêu em nhất dải ngân hà ^_^</p>
            <p>
              Trị <span style={{ color: 'red', fontSize: '20' }}>&hearts;</span>{' '}
              Hường
            </p>
            <p>Italia, ngày 8 tháng 3 năm 2020</p>
          </div>
        </div>
        <audio id="audio" src={url}></audio>
      </div>
    );
  }
}
export default Main;
