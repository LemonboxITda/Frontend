import React from "react";
import styled from "styled-components";
import BgImgSrc from '../assets/header-bg.jpg';

const Home = () => {
    return (
        <Wrapper id="page-top">
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
     </Wrapper>
    )
}

const Wrapper = styled.div`


  .container,
  {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container-sm, .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container-md, .container-sm, .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container-lg, .container-md, .container-sm, .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
      max-width: 1320px;
    }
  }
  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .page-section h2.section-heading, .page-section .section-heading.h2 {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  section#contact .section-heading {
    color: #fff;
  }
  .page-section h3.section-subheading, .page-section .section-subheading.h3 {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin-bottom: 4rem;
  }
  
  
  

  .col {
    flex: 1 0 0%;
  }

  @media (min-width: 768px) {
    .col-md {
      flex: 1 0 0%;
    }

    .row-cols-md-auto > * {
      flex: 0 0 auto;
      width: auto;
    }

    .row-cols-md-1 > * {
      flex: 0 0 auto;
      width: 100%;
    }

    .row-cols-md-2 > * {
      flex: 0 0 auto;
      width: 50%;
    }

    .row-cols-md-3 > * {
      flex: 0 0 auto;
      width: 33.3333333333%;
    }

    .row-cols-md-4 > * {
      flex: 0 0 auto;
      width: 25%;
    }

    .row-cols-md-5 > * {
      flex: 0 0 auto;
      width: 20%;
    }

    .row-cols-md-6 > * {
      flex: 0 0 auto;
      width: 16.6666666667%;
    }

    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
    }

    .col-md-1 {
      flex: 0 0 auto;
      width: 8.33333333%;
    }

    .col-md-2 {
      flex: 0 0 auto;
      width: 16.66666667%;
    }

    .col-md-3 {
      flex: 0 0 auto;
      width: 25%;
    }

    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }

    .col-md-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }

    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }

    .col-md-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }

    .col-md-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }

    .col-md-9 {
      flex: 0 0 auto;
      width: 75%;
    }

    .col-md-10 {
      flex: 0 0 auto;
      width: 83.33333333%;
    }

    .col-md-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }

    .col-md-12 {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
      -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
  }
 

  .btn-primary {
    color: #fff;
    background-color: #ffc800;
    border-color: #ffc800;
  }
  .btn-primary:hover {
    color: #fff;
    background-color: #d9aa00;
    border-color: #cca000;
  }
  .btn-check:focus + .btn-primary, .btn-primary:focus {
    color: #fff;
    background-color: #d9aa00;
    border-color: #cca000;
    box-shadow: 0 0 0 0.25rem rgba(255, 208, 38, 0.5);
  }
  .btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #cca000;
    border-color: #bf9600;
  }
  .btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgba(255, 208, 38, 0.5);
  }
  .btn-primary:disabled, .btn-primary.disabled {
    color: #fff;
    background-color: #ffc800;
    border-color: #ffc800;
  }

  


  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

 
  .text-center {
    text-align: center !important;
  }

  .text-uppercase {
    text-transform: uppercase !important;
  }

  @media (min-width: 768px) {
    section {
      padding: 9rem 0;
    }
  }
  .btn-xl {
    padding: 1.25rem 2.5rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    background-color: #ffc800;
    border-color: #ffc800;
  }

  .btn-social {
    height: 2.5rem;
    width: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
  }
  
  
  header.masthead {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    text-align: center;
    color: #000;
    // background-image: url("./header-bg.jpg");
    background-image: url(${BgImgSrc});
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
  }
  header.masthead .masthead-subheading {
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.5rem;
    margin-bottom: 25px;
    font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  header.masthead .masthead-heading {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  @media (min-width: 768px) {
    header.masthead {
      padding-top: 17rem;
      padding-bottom: 12.5rem;
    }
    header.masthead .masthead-subheading {
      font-size: 2.25rem;
      font-style: italic;
      line-height: 2.25rem;
      margin-bottom: 2rem;
    }
    header.masthead .masthead-heading {
      font-size: 4.5rem;
      font-weight: 700;
      line-height: 4.5rem;
      margin-bottom: 4rem;
    }
  }
`
export default Home;
