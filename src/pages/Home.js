import React from "react";
import "./assets/styles.css";

const Home = () => {
    return (
        <div id="page-top">
            <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To LemonBox!</div>
                <div class="masthead-heading text-uppercase">Start your habit</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
            </header>
       
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">3 main services : Calendar | Community | My Page</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-calendar-days fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Calendar</h4>
                        <p class="text-muted">레몬박스의 대표 영양제인 종합비타민, 프로바이오틱스, 루테인&amp;오메가3 복용 기록과 재구매 시기 알람으로 끊기지 않는 습관 만들기</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-comment-dots fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Community</h4>
                        <p class="text-muted">영양제에 대한 잘못된 상식, 유용한 정보 등 글 작성, 댓글, 좋아요 기능을 활용해 회원들과 소통하고 영양제에 대해 더 자세히 알기</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">My Page</h4>
                        <p class="text-muted">내가 복용하고 있는 영양제 관리 및 기본 정보 관리하기</p>
                    </div>
                </div>
            </div>
        </section>
     </div>
    )
}

export default Home;