<template>
<!--头部导航栏-->
  <div class="header">
    <div class="top-bar">
      <div class="container">
        <div class="top-nav">
          <a href="#">小米官网</a><span class="sep">|</span>
          <a href="#">小米商城</a><span class="sep">|</span>
          <a href="#">小米澎湃OS</a><span class="sep">|</span>
          <a href="#">loT</a><span class="sep">|</span>
          <a href="#">云服务</a><span class="sep">|</span>
          <a href="#">天星数科</a><span class="sep">|</span>
          <a href="#">有品</a><span class="sep">|</span>
          <a href="#">小爱开放平台</a><span class="sep">|</span>
          <a href="#">资质证照</a><span class="sep">|</span>
          <a href="#">协议规则</a><span class="sep">|</span>
          <a href="#">下载app</a><span class="sep">|</span>
          <a href="#">Select Location</a>
        </div>
        <div class="cart">
          <a href="#">
            <el-icon style="font-size: 20px; vertical-align: -5px">
              <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z" fill="currentColor"></path>
              </svg>
            </el-icon>
            购物车（0）
          </a>
        </div>
        <div class="top-info">
          <a href="#">登录</a><span class="sep">|</span>
          <a href="#">注册</a><span class="sep">|</span>
          <a href="#">消息通知</a>
        </div>
      </div>
    </div>
    <div class="site-header">
      <div class="container">
        <div class="logo">
          <a href="#">
<!--            <img src="../assets/logo-mi2.png" alt="小米官网">-->
          </a>
        </div>
        <div class="nav">
          <ul>
            <li @mouseover="hover1=true" @mouseleave="hover1=false"><a href="#">Xiaomi手机</a></li>
            <li @mouseover="hover2=true" @mouseleave="hover2=false"><a href="#">Redmi手机</a></li>
            <li @mouseover="hover3=true" @mouseleave="hover3=false"><a href="#">电视</a></li>
            <li @mouseover="hover4=true" @mouseleave="hover4=false"><a href="#">笔记本</a></li>
            <li @mouseover="hover5=true" @mouseleave="hover5=false"><a href="#">平板</a></li>
            <li @mouseover="hover6=true" @mouseleave="hover6=false"><a href="#">家电</a></li>
            <li @mouseover="hover7=true" @mouseleave="hover7=false"><a href="#">路由器</a></li>
            <li><a href="#">服务中心</a></li>
            <li><a href="#">社区</a></li>
          </ul>
        </div>
        <div class="search">
          <input content="充电宝" type="text">
          <el-button class="icon" type="default">
            <el-icon style="font-size:30px; vertical-align: middle">
              <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704" fill="currentColor"></path></svg>
            </el-icon>
<!--            <span style="vertical-align: middle"> Search </span>-->
          </el-button>
        </div>
      </div>
      <div v-show="hover1" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverPhones" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
                </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover2" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverRedmi" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover3" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverTV" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover4" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverNotebook" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover5" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverPad" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover6" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverHouse" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="hover7" class="header-nav-menu">
        <div class="container">
          <ul>
            <li v-for="item in hoverRouter" :key="item.id">
              <a href="#">
                <div class="figure">
                  <img :src="item.url" alt="">
                </div>
                <p class="title">{{ item.title }}</p>
                <p class="price">{{ item.price }}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
<!--侧边固定栏-->
  <div class="back-top">
    <ul>
      <li>
        <el-popover
          content="扫码领取新人百元礼包"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
              <el-icon :size="20">
                <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0" fill="currentColor"></path></svg>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
      <li>
        <el-popover
          content="个人中心"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
            <el-icon :size="20">
              <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0" fill="currentColor"></path></svg>
            </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
      <li>
        <el-popover
          content="售后服务"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
              <el-icon :size="20">
                <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128" fill="currentColor"></path><path d="M384 128v64h256v-64zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64" fill="currentColor"></path></svg>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
      <li>
        <el-popover
          content="人工客服"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
              <el-icon :size="20">
                <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0M256 448a128 128 0 1 0 0 256zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128" fill="currentColor"></path></svg>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
      <li>
        <el-popover
          content="购物车"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
              <el-icon :size="20">
                <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96m320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96M96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128zm314.24 576h395.904l82.304-384H333.44l76.8 384z" fill="currentColor"></path></svg>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
      <li>
        <br>
      </li>
      <li @click="toTop">
        <el-popover
          content="回顶部"
          popper-class="pop-wid"
          :hide-after="0"
          transition="none"
          placement="left"
          trigger="hover"
        >
          <template #reference>
            <el-button class="m-2">
              <el-icon :size="20">
                <svg data-v-ea893728="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z" fill="currentColor"></path></svg>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
      </li>
    </ul>
  </div>
<!--分类目录-->
  <div class="categries">
    <div class="container">
      <div class="catalog">
        <ul>
          <li>
            <a class="catalog-content" href="#">
              手机
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              电视
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              家电
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              笔记本 平板
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              出行 穿戴
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              耳机 音箱
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              健康 儿童
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              生活 箱包
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              智能 路由器
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
          <li>
            <a class="catalog-content" href="#">
              电源 配件
              <el-icon color="#fff"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg></el-icon>
            </a>
          </li>
        </ul>
      </div>
      <!--轮播图-->
      <div class="swipers">
        <el-carousel :interval="5000" arrow="never" height="460px">
          <el-carousel-item v-for="(item,index) in swiper" :key="index">
<!--            <h3 text="2xl" justify="center">{{ item }}</h3>-->
            <a href="#">
              <img :src="item.url" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--宫格-->
      <div class="grids">
        <div class="grid-six">
          <ul>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path><path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"></path><path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"></path></svg></el-icon>
                保障服务
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M416 896V128h192v768zm-288 0V448h192v448zm576 0V320h192v576z"></path></svg></el-icon>
                企业团购
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg></el-icon>
                F码通道
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128"></path><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32m160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32m-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32M64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32m896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32m0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32"></path></svg></el-icon>
                米粉卡
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"></path></svg></el-icon>
                以旧换新
              </a>
            </li>
            <li>
              <a href="#">
                <el-icon :size="24"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0"></path></svg></el-icon>
                话费充值
              </a>
            </li>
          </ul>
        </div>
        <div class="grid-three">
          <ul>
            <li v-for="item in gridImg" :key="gridImg.id">
              <a href="#">
                <img :src="item.url" :alt="item.comment">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
<!--内容-->
  <div class="main">
    <div class="container">
      <div class="banner">
        <a href="#">
          <img src="../assets/banner/bannerGlasses.webp" alt="小米眼镜">
        </a>
      </div>
<!--手机栏-->
      <div class="mobile">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">手机</h2>
            <div class="more">
              <a href="#">
                查看更多
                <el-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></svg>
                </el-icon>
              </a>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item1">
                  <a href="#">
                    <img src="../assets/gridPhone/uitra.webp" alt="xiaomi 14 Ultra">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in mobileData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--智能穿戴-->
      <div class="wear">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">智能穿戴</h2>
            <div class="more">
              <ul>
                <li class="active">耳机</li>
                <li>穿戴</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item1">
                  <a href="#">
                    <img src="../assets/gridWear/buds1.webp" alt="xiaomi Watch S3">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in wearData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">Redmi Buds 4 活力版</h3>
                        <p class="price"><span class="num">89元</span></p>
                        <img src="../assets/gridWear/buds9.webp" alt="Redmi Buds 4 活力版">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>耳机</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--笔记本 | 平板-->
      <div class="pad">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">笔记本 | 平板</h2>
            <div class="more">
              <ul>
                <li class="active">热门</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item1">
                  <a href="#">
                    <img src="../assets/gridPads/pads1.webp" alt="Redmi Pad Pro">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in padData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">Xiaomi Pad 6 Max 14</h3>
                        <p class="price"><span class="num">3499元起</span></p>
                        <img src="../assets/gridPads/pads9.webp" alt="Xiaomi Pad 6 Max 14">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>热门</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--家电-->
      <div class="electronic">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">家电</h2>
            <div class="more">
              <ul>
                <li class="active">热门</li>
                <li>电视影音</li>
                <li>空调</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridElec/1.webp" alt="小米电视S系列">
                  </a>
                </li>
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridElec/6.webp" alt="洗烘一体机">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in electronicData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">米家迷你波轮洗衣机Pro 3kg</h3>
                        <p class="price"><span class="num">849元</span></p>
                        <img src="../assets/gridElec/10.webp" alt="米家迷你波轮洗衣机Pro 3kg">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>热门</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--生活电器-->
      <div class="warmer">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">生活电器</h2>
            <div class="more">
              <ul>
                <li class="active">电暖气</li>
                <li>扫地机</li>
                <li>空净</li>
                <li>清洁</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridWarmer/w1.webp" alt="全能扫拖机器人M30 S">
                  </a>
                </li>
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridWarmer/w6.webp" alt="米家全效空气净化器 Ultra">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in warmerData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">米家踢脚线电暖器1S</h3>
                        <p class="price"><span class="num">699元</span></p>
                        <img src="../assets/gridWarmer/w10.webp" alt="米家踢脚线电暖器1S">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>电暖器</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--厨房电器-->
      <div class="kitchen">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">厨房电器</h2>
            <div class="more">
              <ul>
                <li class="active">净水器</li>
                <li>烟灶</li>
                <li>电饭煲</li>
                <li>微蒸烤</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridKitchen/k1.webp" alt="小米净水器1200G">
                  </a>
                </li>
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridKitchen/k6.webp" alt="米家侧吸烟灶套装S1">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in kitchenData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <!-- <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">米家踢脚线电暖器1S</h3>
                        <p class="price"><span class="num">699元</span></p>
                        <img src="../assets/gridWarmer/w10.webp" alt="米家踢脚线电暖器1S">
                      </a>
                    </li> -->
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>净水器</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--智能家居-->
      <div class="household">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">智能家居</h2>
            <div class="more">
              <ul>
                <li class="active">小爱音箱</li>
                <li>门锁门铃</li>
                <li>路由器</li>
                <li>智能设备</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridHousehold/s1.webp" alt="xiaomi Sound">
                  </a>
                </li>
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridHousehold/s6.webp" alt="小米人脸识别智能门锁 X">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in householdData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">Redmi小爱触屏音箱 8英寸</h3>
                        <p class="price"><span class="num">449元</span></p>
                        <img src="../assets/gridHousehold/s10.webp" alt="Redmi小爱触屏音箱 8英寸">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>小爱音箱</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
<!--运动出行-->
      <div class="sports">
        <div class="section">
          <div class="box-hd">
            <h2 class="title">运动出行</h2>
            <div class="more">
              <ul>
                <li class="active">平衡车/滑板车</li>
                <li>运动健身</li>
                <li>箱包配饰</li>
                <li>出行工具</li>
              </ul>
            </div>
          </div>
          <div class="main-container">
            <div class="left-container">
              <ul class="brick-box1">
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridSports/c1.webp" alt="九号平衡车">
                  </a>
                </li>
                <li  class="brick-item brick-item2">
                  <a href="#">
                    <img src="../assets/gridSports/c6.webp" alt="米家跑步机">
                  </a>
                </li>
              </ul>
            </div>
            <div class="right-container">
              <ul class="brick-box2">
                <li class="brick-item brick-item2" v-for="(item, index) in sportsData" :key="index">
                  <a href="#">
                    <img :src="item.url" :alt="item.desc">
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="desc">{{ item.desc }}</p>
                    <p class="price">
                      <span class="num">{{ item.price }}</span>元
                      <span v-show="item.flag1">起</span>
                      <del v-show="item.flag2">
                        <span class="num">{{ item.oldPrice }}</span>元
                      </del>
                    </p>
                  </a>
                </li>
                <li style="background-color: transparent; width: 24%">
                  <ul>
                    <li class="brick-item brick-item3">
                      <a href="#">
                        <h3 class="title">米家电动滑板车 3 青春版</h3>
                        <p class="price"><span class="num">1999元</span></p>
                        <img src="../assets/gridSports/c10.webp" alt="米家电动滑板车 3 青春版">
                      </a>
                    </li>
                    <li class="brick-item more">
                      <a href="#">
                        <h3 class="title">浏览更多</h3>
                        <p>平衡车/滑板车</p>
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"></path></svg></el-icon>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <a href="#">
          <img src="../assets/banner/pen.webp" alt="小米巨能写中性笔">
        </a>
      </div>
    </div>
  </div>
<!--  尾部-->
  <div class="footer">
      <div class="footer-service">
        <div class="container">
          <ul>
            <li>
              <a href="#">
                <el-icon size="24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"></path></svg>
                </el-icon>
                预约维修服务
              </a>
            </li>
            <li class="left-border">
              <a href="#">
                <el-icon size="24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"></path></svg>
                </el-icon>
                7天无理由退货
              </a>
            </li>
            <li class="left-border">
              <a href="#">
                <el-icon size="24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"></path></svg>
                </el-icon>
                15天免费换货
              </a>
            </li>
            <li class="left-border">
              <a href="#">
                <el-icon size="24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M480 896V640H192v-64h288V320H192v576zm64 0h288V320H544v256h288v64H544zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z"></path><path fill="currentColor" d="M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32"></path><path fill="currentColor" d="M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256"></path><path fill="currentColor" d="M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256"></path></svg>
                </el-icon>
                满69包邮
              </a>
            </li>
            <li class="left-border">
              <a href="#">
                <el-icon size="24">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"></path><path fill="currentColor" d="M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192m0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320"></path></svg>
                </el-icon>
                1100余家售后网点
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-info">
        <div class="container">
          <dl>
            <dt></dt>
          </dl>
          <dl>
            <dt>选购指南</dt>
            <dd><a href="#">手机</a></dd>
            <dd><a href="#">电视</a></dd>
            <dd><a href="#">笔记本</a></dd>
            <dd><a href="#">平板</a></dd>
            <dd><a href="#">穿戴</a></dd>
            <dd><a href="#">耳机</a></dd>
            <dd><a href="#">家电</a></dd>
            <dd><a href="#">路由器</a></dd>
            <dd><a href="#">音箱</a></dd>
            <dd><a href="#">配件</a></dd>
          </dl>
          <dl>
            <dt>服务中心</dt>
            <dd><a href="#">申请售后</a></dd>
            <dd><a href="#">售后政策</a></dd>
            <dd><a href="#">维修服务价格</a></dd>
            <dd><a href="#">订单查询</a></dd>
            <dd><a href="#">以旧换新</a></dd>
            <dd><a href="#">保障服务</a></dd>
            <dd><a href="#">防伪查询</a></dd>
            <dd><a href="#">F码通道</a></dd>
          </dl>
          <dl>
            <dt>线下门店</dt>
            <dd><a href="#">小米之家</a></dd>
            <dd><a href="#">服务网点</a></dd>
            <dd><a href="#">授权体验店/专区</a></dd>
          </dl>
          <dl>
            <dt>关于小米</dt>
            <dd><a href="#">了解小米</a></dd>
            <dd><a href="#">加入小米</a></dd>
            <dd><a href="#">投资者关系</a></dd>
            <dd><a href="#">可持续发展</a></dd>
            <dd><a href="#">廉洁举报</a></dd>
          </dl>
          <dl>
            <dt>关注我们</dt>
            <dd><a href="#">新浪微博</a></dd>
            <dd><a href="#">官方微信</a></dd>
            <dd><a href="#">联系我们</a></dd>
            <dd><a href="#">公益基金会</a></dd>
          </dl>
          <div class="contact">
            <div class="contact-top">
              <p class="phone">400-100-5678</p>
              <p>8:00-18:00（仅收市话费）</p>
              <a href="#">
                <el-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-6fbb019e=""><path fill="currentColor" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z"></path></svg>
                </el-icon>
                人工客服
              </a>
            </div>
            <div class="contact-bottom">
              <p class="phone">400-180-8888</p>
              <p>8:00-18:00（仅收市话费）</p>
              <p>适用于：MIX FOLD、巨屏电视系列</p>
              <a href="#">
                <el-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-6fbb019e=""><path fill="currentColor" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z"></path></svg>
                </el-icon>
                人工客服
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-link">
        <div class="container">
          <div class="footer-img">
            <img src="../assets/logo-mi2.png" alt="logo">
          </div>
          <div class="links">
            <p>
              <a href="#">小米商城</a><span class="sep">|</span>
              <a href="#">小米澎湃OS</a><span class="sep">|</span>
              <a href="#">米家</a><span class="sep">|</span>
              <a href="#">米聊</a><span class="sep">|</span>
              <a href="#">多看</a><span class="sep">|</span>
              <a href="#">游戏</a><span class="sep">|</span>
              <a href="#">音乐</a><span class="sep">|</span>
              <a href="#">政企服务</a><span class="sep">|</span>
              <a href="#">小米天猫店</a><span class="sep">|</span>
              <a href="#">小米集团隐私政策</a><span class="sep">|</span>
              <a href="#">小米公司儿童信息保护规则</a><span class="sep">|</span>
              <a href="#">小米商城隐私政策</a><span class="sep">|</span>
              <a href="#">小米商城用户协议</a><span class="sep">|</span>
              <a href="#">问题反馈</a><span class="sep">|</span>
              <a href="#">Select Location</a>
            </p>
            <p>
              <a href="#">北京互联网法院法律服务工作站</a><span class="sep">|</span>
              <a href="#">中国消费者协会</a><span class="sep">|</span>
              <a href="#">北京市消费者协会</a>
            </p>
            <p class="links-bottom">
              ©&nbsp;<a href="#">mi.com</a>&nbsp;京ICP证110507号&nbsp;<a href="#">京ICP备10046444号</a>&nbsp;<a href="#">京公网安备11010802020134号</a><a href="#">&nbsp;京网文[2023]0169-004号</a><br>
              <a href="#">（京）网械平台备字（2018）第00005号</a>&nbsp;<a href="#">互联网药品信息服务资格证(京)-非经营性-2014-0090</a>&nbsp;<a href="#">营业执照</a>&nbsp;<a href="#">医疗器械质量公告</a><br>
              <a href="#">增值电信业务许可证编号：京B2-20180851</a>&nbsp;网络食品经营备案&nbsp;京食药网食备202010048&nbsp;&nbsp;<a href="#">食品经营许可证</a>&nbsp;新出发京批字第直220280号<br>
              违法和不良信息举报电话：171-5104-4404 <a href="#">知识产权侵权投诉</a> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
            </p>
          </div>
          <div class="images">
            <a href="#"><img src="../assets/footerImg/l1.png" alt="诚信网站"></a>
            <a href="#"><img src="../assets/footerImg/l2.png" alt="可信网站"></a>
            <a href="#"><img src="../assets/footerImg/l3.png" alt="诚信经营"></a>
            <a href="#"><img src="../assets/footerImg/l4.png" alt="网站安全"></a>
            <!--          <img src="../assets/footerImg/l5.png" alt="网站安全">-->
          </div>
        </div>
        <div class="slogan">探索黑科技，小米为发烧而生</div>
      </div>
  </div>
</template>

<style scoped>
.header .top-bar{
  width: 100%;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background-color: #333;
}

.container{
  width: 97%;
  height: 100%;
  margin: 0 auto;
}

.header .top-bar a{
  display: inline-block;
  line-height: 40px;
  //outline: none;
  //text-decoration: none;
  color: #b0b0b0;
  cursor: pointer;
}

.header .top-bar a:hover{
  color: #ffffff;
}

.header .top-bar .sep{
  margin: 8px;
  color: #424242;
}

.header .top-nav{
  display: inline-block;
  float: left;
}

.header .cart, .top-info{
  display: inline-block;
  float: right;
}

.header .cart{
  width: 120px;
  margin-left: 20px;
  background-color: #424242;
  text-align: center;
}

.header .cart a{
  display: block;
}

.header .cart a:hover{
  background-color: #fff;
  color: #ff6700;
}

.header .site-header{
  position: relative;
  width: 100%;
  height: 100px;
}

.header .site-header .logo, .site-header .nav{
  line-height: 100px;
  float: left;
}

.header .site-header .logo a{
  display: block;
  margin-top: 22px;
  width: 56px;
  height: 56px;
  background-image: url("../assets/logo-mi2.png");
  background-size: cover;
}

.header .site-header .nav{
  display: inline-block;
  padding-left: 178px;
}

.header .site-header .container .nav li{
  display: inline-block;
}

.header .site-header .container .nav li a{
  display: block;
  padding: 0 0.6em;
  color: #333;
  font-size: 16px;
}

.header .site-header .container .nav li a:hover{
  color: #ff6700;
}

.header .site-header .search{
  float: right;
  margin-top: 25px;
  height: 50px;
  border: 1px solid #e0e0e0;
}

.header .site-header .search:hover{
  border: 1px solid darkgray;
}

.header .site-header .search input{
  padding: 0 8px;
  height: 50px;
  width: 240px;
  font-size: 14px;
  color: #424242;
  outline: none;
  border: none;
}

.header .site-header .icon{
  float: right;
  border-left: 1px solid #e0e0e0;
  border-right: none;
  border-top: none;
  border-bottom: none;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 0;
}

.header .site-header .icon:hover{
  color: #fff;
  background-color: #ff6700;
}

.header .header-nav-menu{
  display: block;
  position: absolute;
  top: 100px;
  width: 100%;
  height: 229px;
  z-index: 99;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
}

.header .header-nav-menu ul{
  width: 100%;
  display: flex;
}

.header .header-nav-menu li{
  position: relative;
  width: 16.5%;
  float: left;
  padding: 35px 12px 0;
  text-align: center;
}

.header .header-nav-menu .figure{
  width: 160px;
  margin: 0 auto 16px;
}

.header .header-nav-menu :first-child~li a:before{
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 99;
  width: 1px;
  height: 100px;
  background-color: #e0e0e0;
  content: "";
}

.header .header-nav-menu li a{
  display: block;
  color: #333333;
  font-size: 12px;
}

.header .header-nav-menu img{
  width: 100%;
  height: 110px;
}

.header .header-nav-menu a p{
  line-height: 20px;
}

.header .header-nav-menu a .price{
  color: #ff6700;
}

.back-top{
  display: block;
  position: fixed;
  z-index: 999;
  bottom: 70px;
  right: 0;
}

.el-popover .el-popper .pop-wid{
  min-width: 50px!important;
  width: 100px!important;
  padding: 10px;
}

.back-top .m-2{
  border-radius: 0;
  padding: 20px 5px;
  margin-top: -1px;
  border: 1px solid #f5f5f5;
}

.back-top .m-2:hover{
  color: #ff6700;
}

.categries{
  width: 100%;
  //height: 460px;
  margin-bottom: 26px;
}

.categries .catalog{
  position: absolute;
  width: 19%;
  min-width: 234px;
  background: rgba(105, 101, 101, .6);
  z-index: 9;
}

.categries .catalog ul{
  padding: 20px 0;
}

.categries .catalog li{
  width: 100%;
  height: 42px;
  line-height: 42px;
}

.categries .catalog .catalog-content{
  display: block;
  padding-left: 30px;
  font-size: 14px;
  color: #fff;
}

.categries .catalog .el-icon{
  float: right;
  margin: 15px 20px 0 0;
}

.categries .catalog .catalog-content:hover{
  background-color: #ff6700;
}

.categries .swipers img{
  width: 100%;
  height: 100%;
}

.categries .grids{
  margin-top: 14px;
  height: 170px;
  width: 100%;
}

.categries .grids .grid-six{
  width: 19.5%;
  min-width: 234px;
  float: left;
  text-align: center;
}

.categries .grids .grid-six ul{
  background-color: #5f5750;
  padding: 3px;
}

.categries .grids .grid-six li{
  position: relative;
  width: 33%;
  display: inline-block;
  height: 82px;
  font-size: 12px;
}

.categries .grids .grid-six li::before{
  top: 0;
  left: 10px;
  width: 64px;
  height: 1px;
}

.categries .grids .grid-six li::after{
  top: 6px;
  left: 0;
  width: 1px;
  height: 70px;
}

.categries .grids .grid-six li::before, .categries .grids .grid-six li::after{
  position: absolute;
  content: " ";
  background: #665e57;
}

.categries .grids .grid-six li a{
  display: block;
  padding: 20px 0;
  color: #bebebe;
}

.categries .grids .grid-six .el-icon{
  width: 100%;
  //color: #e0e0e0;
}

.categries .grids .grid-six li a:hover{
  color: #fff;
}

.categries .grid-three{
  //margin-left: 15px;
  width: 79%;
  float: right;
}

.categries .grid-three ul{
  display: flex;
  //margin-left: 15px;
  width: 100%;
  justify-content: space-between;
}

.categries .grid-three li{
  display: inline-block;
  width: 32%;
}

.categries .grid-three li a{
  display: block;
  height: 170px;
  width: 100%;
  transition: box-shadow 0.2s ease-in-out;
}

.categries .grid-three img{
  width: 100%;
  height: 100%;
}

.categries .grid-three li a:hover{
  box-shadow: 0 10px 35px 0 #e0e0e0;
}

.main{
  padding-top: 4px;
  padding-bottom: 12px;
  background-color: #f5f5f5;

}

.main .banner{
  width: 100%;
  //height: 120px;
  margin: 22px 0;
}

.main .banner img{
  width: 100%;
  height: 120px;
}

.main .section{
  margin-bottom: 8px;
}

.main .box-hd{
  position: relative;
  height: 58px;
}

.main .box-hd .title{
  font-size: 22px;
  line-height: 58px;
  font-weight: 200;
  color: #333;
}

.main .box-hd .more{
  position: absolute;
  height: 58px;
  top: 0;
  right: 0;
}

.main .box-hd .more a{
  font-size: 16px;
  color: #424242;
  line-height: 58px;
  transition: all .4s ease;
}

.main .box-hd .more a:hover{
  color: #ff6700;
}

.main .box-hd .more a .el-icon{
  font-size: 12px;
  background-color: #b0b0b0;
  color:#fff;
  padding: 4px;
  border-radius: 10px;
  transition: all .4s ease;
}

.main .box-hd .more a .el-icon:hover{
  background-color: #ff6700;
}

.main .box-hd .more ul{
  font-size: 16px;
  padding: 16px 0 0;
}

.main .box-hd .more li{
  display: inline-block;
  color: #424242;
  font-size: 16px;
  padding: 0 0 2px;
  //line-height: 58px;
  margin-left: 30px;
  transition: border .3s;
  cursor: pointer;
}

.main .box-hd .more .active{
  color: #ff6700;
  border-bottom: 2px solid #ff6700;
}

.main .main-container{
  width: 100%;
  height: 628px;
}

.main .left-container{
  width: 19%;
  min-width: 234px;
  //height: 628px;
  float: left;
}

.main .brick-box1{
  width: 100%;
  height: 628px;
}

.main .brick-item1{
  display: inline-block;
  //float: left;
  height: 614px;
  width: 100%;
}

.main .brick-box1 .brick-item2{
  display: inline-block;
  height: 300px;
  width: 100%;
}

.main .brick-box1 .brick-item2 a{
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
}

.main .brick-box1 .brick-item2 img{
  width: 100%;
  height: 100%;
}

.main .brick-item1 a{
  display: block;
  width: 100%;
  height: 100%;
}

.main .brick-item1 img{
  width: 100%;
  height: 100%;
}

.main .right-container{
  width: 79.5%;
  height: 614px;
  float: right;
}

.main .brick-box2{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  //height: 100%;
  justify-content: space-between;
}

.main .brick-item{
  margin-bottom: 14px;
  transition: all 0.2s linear;
}

.main .brick-item:hover{
  box-shadow: 0 10px 35px 0 #e0e0e0;
}

.main .brick-item2{
  //height: 300px;
  width: 24%;
  float: left;
  background-color: #fff;
}

.main .brick-item2 a{
  display: block;
  text-align: center;
  padding: 20px 0;
}

.main .brick-item2 img{
  width: 160px;
  height: 160px;
  margin: 0 auto 18px;
}

.main .brick-item2 .title{
  color: #333;
  font-size: 14px;
  margin: 0 10px 2px;
  font-weight: 400;
}

.main .brick-item2 .desc{
  margin: 0 10px 10px;
  height: 18px;
  font-size: 12px;
  color: #b0b0b0;
}

.main .brick-item2 .title, .main .brick-item2 .desc{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main .brick-item2 .price{
  margin: 0 10px 14px;
  font-size: 14px;
  color: #ff6700;
}

.main .brick-item2 .price del{
  margin-left: 0.5em;
  color: #b0b0b0;
}

.main .brick-item3, .main .right-container .more{
  position: relative;
  width: 100%;
  height: 93px;
  background-color: #fff;
  padding-top: 50px;
}

.main .brick-item3 a, .main .right-container .more{
  display: block;
}

.main .brick-item3 img{
  position: absolute;
  top: 32px;
  right: 20px;
  width: 80px;
  height: 80px;
}

.main .brick-item3 .title{
  color: #333;
  //width: 94px;
  font-size: 14px;
  font-weight: 400;
  margin: -10px 110px 5px 30px;
}

.main .brick-item3 .price{
  margin: 0 110px 0 30px;
  //width: 94px;
  font-size: 12px;
  color: #ff6700;
}

.main .right-container .more .title{
  color: #333;
  font-size: 18px;
  font-weight: 400;
  margin: 0 110px 5px 30px;
}

.main .right-container .more p{
  margin: 0 110px 0 30px;
  color: #757575;
  font-size: 12px;
}

.main .right-container .more .el-icon{
  position: absolute;
  top: 48px;
  right: 35px;
  font-size: 48px;
  color: #ff6700;
}

.footer .footer-service{
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
}

.footer .footer-service ul{
  padding: 28px 0;
}

.footer .footer-service li{
  display: inline-block;
  float: left;
  width: 19.8%;
  text-align: center;
  //line-height: 80px;
  font-size: 16px;
}

.footer .footer-service .left-border{
  border-left: 1px solid #e0e0e0;
}

.footer .footer-service li a{
  color: #616161;
  transition: color .2s;
}

.footer .footer-service li a:hover{
  color: #ff6700;
}

.footer .footer-service .el-icon{
  vertical-align: -5px;
}

.footer .footer-info{
  padding: 40px 0;
  height: 294px;
}

.footer .footer-info dl{
  width: 13.2%;
  float: left;
}

.footer .footer-info dt{
  width: 100%;
  margin-bottom: 26px;
  font-size: 14px;
  color: #424242;
  line-height: 1.25;
}

.footer .footer-info dd{
  margin-top: 10px;
  font-size: 12px;
  text-align: left;
}

.footer .footer-info dd a{
  color: #757575;
}

.footer .footer-info dd a:hover{
  color: #ff6700;
}

.footer .footer-info .contact{
  width: 20.8%;
  float: right;
  color: #616161;
  text-align: center;
}

.footer .footer-info .contact .phone{
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
}

.footer .footer-info .contact p{
  font-size: 12px;
  margin-bottom: 5px;
}

.footer .footer-info .contact a{
  display: inline-block;
  width: 50%;
  margin-top: 3px;
  border: 1px solid #ff6700;
  background-color: #fff;
  color: #ff6700;
  font-size: 12px;
  line-height: 28px;
  transition: all .4s;
}

.footer .footer-info .contact .el-icon{
  font-size: 14px;
  vertical-align: -3px;
}

.footer .footer-info .contact a:hover{
  background-color: #ff6700;
  color: #fff;
}

.footer .footer-info .contact-top{
  border-left: 1px solid #e0e0e0;
}

.footer .footer-info .contact .contact-bottom{
  margin-top: 25px;
}

.footer .footer-info .contact-bottom .phone~p{
  text-align: left;
  margin-left: 20%;
}

.footer .footer-link{
  background-color: #fafafa;
  padding: 30px 0;
}

.footer .footer-link .footer-img{
  float: left;
  margin-right: 20px;
}

.footer .footer-link .footer-img img{
  width: 56px;
  height: 56px;
}

.footer .footer-link .links{
  padding-left: 77px;
  font-size: 12px;
  color: #b0b0b0;
  line-height: 18px;
}

.footer .footer-link .links a{
  color: #757575;
}

.footer .footer-link .links .links-bottom a{
  color: #b0b0b0;
}

.footer .footer-link .links a:hover{
  color: #ff6700;
}

.footer .footer-link .links .sep{
  margin: 0 3px;
}

.footer .footer-link .images{
  padding-left: 77px;
  margin-top: 4px;
  //height: 37px;
}

.footer .footer-link .images a{
  display: inline-block;
  margin-left: 3px;
}

.footer .footer-link .images img{
  width: 85px;
  height: 32px;
}

.footer .slogan{
  width: 100%;
  margin-top: 45px;
  background: url("../assets/slogan2020.png") no-repeat center;
  text-align: left;
  text-indent: -9999px;
  overflow: hidden;
}

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // components: {Ticket},
  data(){
    return {
      hover1:false,
      hover2:false,
      hover3:false,
      hover4:false,
      hover5:false,
      hover6:false,
      hover7:false,
      hoverPhones:[
        {
          id:1,
          url:require('../assets/headerImgs/navPhone1/1.webp'),
          title:"Xiaomi Civi 4 Pro",
          price:"2999元起"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navPhone1/2.webp'),
          title:"Xiaomi 14 Ultra",
          price:"6499元起"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navPhone1/3.webp'),
          title:"Xiaomi 14 Pro",
          price:"4599元起"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navPhone1/4.webp'),
          title:"Xiaomi 14",
          price:"3999元起"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navPhone1/5.webp'),
          title:"Xiaomi MIX Fold 3",
          price:"7999元起"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navPhone1/6.webp'),
          title:"Xiaomi Civi 3",
          price:"2299元起"
        }
      ],
      hoverRedmi:[
        {
          id:1,
          url:require('../assets/headerImgs/navPhone/1.webp'),
          title:"Redmi Turbo 3",
          price:"1999元起"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navPhone/2.webp'),
          title:"Redmi 13C 5G",
          price:"699元起"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navPhone/3.webp'),
          title:"Redmi K70 Pro",
          price:"3299元起"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navPhone/4.webp'),
          title:"Redmi K70",
          price:"2399元起"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navPhone/5.webp'),
          title:"Redmi K70E",
          price:"1799元起"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navPhone/6.webp'),
          title:"Redmi Note 13 Pro",
          price:"1399元起"
        }
      ],
      hoverTV:[
        {
          id:1,
          url:require('../assets/headerImgs/navTV/1.webp'),
          title:"小米电视 S Pro 65 Mini LED 65英寸",
          price:"4499元"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navTV/2.webp'),
          title:"小米电视新EA系列",
          price:"799元"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navTV/3.webp'),
          title:"小米电视大师86英寸Mini LED",
          price:"14999元"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navTV/4.webp'),
          title:"小米电视S65   65英寸 ",
          price:"2999元"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navTV/5.webp'),
          title:"小米电视A65竞技版   65英寸",
          price:"2399元"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navTV/6.webp'),
          title:"Redmi 智能电视 X85英寸",
          price:"4699元"
        }
      ],
      hoverNotebook:[
        {
          id:1,
          url:require('../assets/headerImgs/navNotebook/1.webp'),
          title:"Redmi G Pro 游戏本 2024",
          price:"8999元"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navNotebook/2.webp'),
          title:" Redmi Book Pro 14 2024",
          price:"4999元起"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navNotebook/3.webp'),
          title:"Redmi Book Pro 16 2024",
          price:"6399元起"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navNotebook/4.webp'),
          title:"Redmi Book 16 2024",
          price:"3699元起"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navNotebook/5.webp'),
          title:"Redmi Book 14 2024",
          price:"4499元起"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navNotebook/6.webp'),
          title:"Redmi Book Pro 15 2023 锐龙版",
          price:"4799元起"
        }
      ],
      hoverPad:[
        {
          id:1,
          url:require('../assets/headerImgs/navPad/1.webp'),
          title:"Redmi Pad Pro",
          price:"1499元起"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navPad/2.webp'),
          title:"Xiaomi Pad 6S Pro 12.4",
          price:"3199元起"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navPad/3.webp'),
          title:"Redmi Pad SE",
          price:"899元起"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navPad/4.webp'),
          title:"Xiaomi Pad 6 Max 14",
          price:"3499元起"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navPad/5.webp'),
          title:"Xiaomi Pad 6 Pro",
          price:"2299元起"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navPad/6.webp'),
          title:"Xiaomi Pad 6",
          price:"1799元起"
        }
      ],
      hoverHouse:[
        {
          id:1,
          url:require('../assets/headerImgs/navHouse/1.webp'),
          title:"米家冰箱对开门610L墨羽岩",
          price:"2199元"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navHouse/2.webp'),
          title:"米家冰箱 对开门536L 墨羽岩",
          price:"1999元"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navHouse/3.webp'),
          title:"新风空调 立式3匹",
          price:"7299元"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navHouse/4.webp'),
          title:"小米空调 1.5匹新1级能效",
          price:"2499元"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navHouse/5.webp'),
          title:"米家分区洗烘一体机 15kg ",
          price:"4999元"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navHouse/6.webp'),
          title:"米家洗烘一体机 12kg",
          price:"2399元"
        }
      ],
      hoverRouter:[
        {
          id:1,
          url:require('../assets/headerImgs/navRouter/1.webp'),
          title:"Xiaomi路由器AX3000T",
          price:"169元"
        },
        {
          id:2,
          url:require('../assets/headerImgs/navRouter/2.webp'),
          title:"Xiaomi路由器 BE3600",
          price:"249元"
        },
        {
          id:3,
          url:require('../assets/headerImgs/navRouter/3.webp'),
          title:"Xiaomi路由器 BE6500 Pro",
          price:"699元"
        },
        {
          id:4,
          url:require('../assets/headerImgs/navRouter/4.webp'),
          title:"Xiaomi HomeWiFi 三频 Mesh 路由器",
          price:"1299元"
        },
        {
          id:5,
          url:require('../assets/headerImgs/navRouter/5.jpeg'),
          title:"小米路由器4A 千兆版",
          price:"99元"
        },
        {
          id:6,
          url:require('../assets/headerImgs/navRouter/6.png'),
          title:"查看全部\n小米路由器",
          price:""
        }
      ],
      swiper:[
        {
          id:1,
          url:require('../assets/air.webp')
        },
        {
          id:2,
          url:require('../assets/bluetooth.webp')
        },
        {
          id:3,
          url:require('../assets/glasses.webp')
        },
        {
          id:4,
          url:require('../assets/phoneglasses.webp')
        },
        {
          id:5,
          url:require('../assets/phones.jpg')
        },
        {
          id:6,
          url:require('../assets/robot.webp')
        }
      ],
      gridImg:[
        {
          id:1,
          url:require('../assets/grid3/pengpaios.png'),
          comment: "xiaomi 14"
        },
        {
          id:2,
          url:require('../assets/grid3/dianshia.jpg'),
          comment: "小米电视A竞技系列"
        },
        {
          id:3,
          url:require('../assets/grid3/budspro.png'),
          comment: "Xiaomi Buds 4 Pro"
        }
      ],
      mobileData:[
        {
          url:require('../assets/gridPhone/phones1.webp'),
          title:'Redmi Turbo 3',
          desc:'性能旋风，席卷而来',
          price: 1999,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPhone/phones2.webp'),
          title:'Xiaomi Civi 4 Pro',
          desc:'徕卡光学Summilux镜头 | 5000万徕卡人像镜头',
          price: 2999,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPhone/phones3.webp'),
          title:'Xiaomi 14 Ultra',
          desc:'徕卡全明星四摄 | 双向卫星通信  | 小米澎湃OS',
          price: 6499,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPhone/phones4.webp'),
          title:'Redmi K70 Pro',
          desc:'第三代骁龙8 年度旗舰平台',
          price: 3299,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPhone/phones5.webp'),
          title:'Redmi K70',
          desc:'第二代骁龙8 旗舰芯',
          price: 2399,
          flag1:true,
          flag2:true,
          oldPrice:2499
        },
        {
          url:require('../assets/gridPhone/phones6.webp'),
          title:'Redmi K70E',
          desc:'新一代旗舰焊门员',
          price: 1799,
          flag1:true,
          flag2:true,
          oldPrice:1999
        },
        {
          url:require('../assets/gridPhone/phones7.webp'),
          title:'Xiaomi 14 Pro',
          desc:'徕卡Summilux可变光圈镜头｜小米澎湃OS',
          price: 4599,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPhone/phones8.webp'),
          title:'Xiaomi 14',
          desc:'徕卡光学Summilux镜头｜小米澎湃OS｜第三代骁龙®8移动平台',
          price: 3999,
          flag1:true,
          flag2:false,
          oldPrice:0
        }
      ],
      wearData:[
        {
          url:require('../assets/gridWear/buds2.webp'),
          title:'Xiaomi开放式耳机',
          desc:'舒适稳固佩戴｜超线性发声单元｜独立防漏音系统',
          price: 649,
          flag1:false,
          flag2:true,
          oldPrice:699
        },
        {
          url:require('../assets/gridWear/buds3.webp'),
          title:'Redmi Buds 5 Pro',
          desc:'同轴双单元 旗舰音质 | 52dB/4kHz 旗舰降噪 | 49ms 超低延迟',
          price: 399,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWear/buds4.webp'),
          title:'Redmi Buds 5',
          desc:'46dB深度降噪丨12.4mm镀钛动圈丨40小时超长续航',
          price: 199,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWear/buds5.webp'),
          title:'Redmi Buds 5 AAPE 潮流限定版',
          desc:'46dB深度降噪丨12.4mm镀钛动圈丨40小时超长续航',
          price: 299,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWear/buds6.webp'),
          title:'Xiaomi Buds 4 Pro',
          desc:'48dB智能动态降噪｜骨声纹通话降噪 | 独立空间音频',
          price: 799,
          flag1:false,
          flag2:true,
          oldPrice:1099
        },
        {
          url:require('../assets/gridWear/buds7.webp'),
          title:'Xiaomi Buds 4',
          desc:'半入耳主动降噪｜HiFi音质 | 独立空间音频',
          price: 499,
          flag1:false,
          flag2:true,
          oldPrice:699
        },
        {
          url:require('../assets/gridWear/buds8.webp'),
          title:'Redmi Buds 4 Pro',
          desc:'43dB 宽频降噪 | HiFi 高保真音质 | 59ms 游戏低延迟',
          price: 299,
          flag1:false,
          flag2:true,
          oldPrice:399
        }
      ],
      padData:[
        {
          url:require('../assets/gridPads/pads2.webp'),
          title:'Redmi Pad Pro系列',
          desc:'12.1英寸2.5K旗舰机大屏 | 10000mAh超大电池',
          price: 1499,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPads/pads3.webp'),
          title:'Xiaomi Pad 6S Pro 12.4',
          desc:'第二代骁龙8 旗舰处理器 | 小米澎湃OS',
          price: 3299,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPads/pads4.webp'),
          title:'Redmi Book Pro 14 2024',
          desc:'65W 满血性能｜全新酷睿 Ultra 处理器',
          price: 4999,
          flag1:true,
          flag2:true,
          oldPrice:5299
        },
        {
          url:require('../assets/gridPads/pads5.webp'),
          title:'Redmi Book Pro 16 2024',
          desc:'70W 狂暴性能｜3.1K 165Hz 高刷高亮屏',
          price: 6399,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPads/pads6.webp'),
          title:'Redmi Book 16 2024',
          desc:'47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
          price: 3699,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPads/pads7.webp'),
          title:'Redmi Book 14 2024',
          desc:'47W 满血性能 | 小米澎湃智联 | 旗舰硬核品质',
          price: 4499,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridPads/pads8.webp'),
          title:'Redmi Pad SE',
          desc:'高性价比千元平板｜11英寸高刷护眼大屏｜全金属一体机身｜73.2天超长待机',
          price: 899,
          flag1:false,
          flag2:true,
          oldPrice:999
        }
      ],
      electronicData:[
        {
          url:require('../assets/gridElec/2.webp'),
          title:'小米电视S系列',
          desc:'144HZ超高刷  3+32G   多色温色彩还原技术',
          price: 2599,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridElec/3.webp'),
          title:'小米电视S Pro Mini LED系列',
          desc:'144Hz超高刷、4+64G大存储',
          price: 4999,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridElec/4.webp'),
          title:'小米电视 S Mini LED 系列',
          desc:'Mini LED 高分区背光、1200nits峰值亮度',
          price: 2999,
          flag1:true,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridElec/5.webp'),
          title:'巨省电 小米空调 1.5匹新1级能效',
          desc:'强劲制冷 | 高效节能 | 智能互联',
          price: 2499,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridElec/7.webp'),
          title:'米家新风空调 立式3匹',
          desc:'全屋快通风，就要大新风',
          price: 7299,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridElec/8.webp'),
          title:'米家分区洗烘一体机 15kg ',
          desc:'健康分开洗  一台就够了',
          price: 4999,
          flag1:false,
          flag2:true,
          oldPrice:5999
        },
        {
          url:require('../assets/gridElec/9.webp'),
          title:'米家波轮洗衣机 10kg',
          desc:'全景玻璃阻尼上盖 防夹手',
          price: 999,
          flag1:false,
          flag2:true,
          oldPrice:1499
        }
      ],
      warmerData:[
        {
          url:require('../assets/gridWarmer/w2.webp'),
          title:'米家电暖器 温控版',
          desc:'2200W 强劲功率，对流速热，居浴两用',
          price: 279,
          flag1:false,
          flag2:true,
          oldPrice:329
        },
        {
          url:require('../assets/gridWarmer/w3.webp'),
          title:'米家石墨烯踢脚线电暖器 仿真火焰版',
          desc:'加湿+火焰效果 | 悬浮外观 | 双核石墨烯速热 ',
          price: 1199,
          flag1:false,
          flag2:true,
          oldPrice:1599
        },
        {
          url:require('../assets/gridWarmer/w4.webp'),
          title:'米家石墨烯智能电暖器',
          desc:'石墨烯高导热，即开即暖无需等',
          price: 499,
          flag1:false,
          flag2:true,
          oldPrice:549
        },
        {
          url:require('../assets/gridWarmer/w5.webp'),
          title:'米家踢脚线电暖器E',
          desc:'制暖身材小，抵御寒冬功劳大',
          price: 499,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWarmer/w7.webp'),
          title:'米家石墨烯折叠踢脚线电暖器 超薄版',
          desc:'0°-180°百变折叠不占地|石墨烯速热|智能恒温',
          price: 899,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWarmer/w8.webp'),
          title:'米家石墨烯踢脚线电暖器',
          desc:'石墨烯速热取暖，快上加快',
          price: 749,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridWarmer/w9.webp'),
          title:'米家直流变频两季扇',
          desc:'暖风和煦，凉风沁人',
          price: 799,
          flag1:false,
          flag2:true,
          oldPrice:899
        }
      ],
      kitchenData:[
        {
          url:require('../assets/gridKitchen/k2.webp'),
          title:'米家净水器1600G',
          desc:'2.1秒一杯水，还原自来水的澎湃流速',
          price: 3499,
          flag1:false,
          flag2:true,
          oldPrice:4599
        },
        {
          url:require('../assets/gridKitchen/k3.webp'),
          title:'小米即热净水器Q600',
          desc:'净热一体，1秒速热，精选调温每1℃',
          price: 2299,
          flag1:false,
          flag2:true,
          oldPrice:3499
        },
        {
          url:require('../assets/gridKitchen/k4.webp'),
          title:'小米净水器H600G',
          desc:'纯净生活双出水，六级过滤健康直饮',
          price: 1199,
          flag1:false,
          flag2:true,
          oldPrice:1499
        },
        {
          url:require('../assets/gridKitchen/k5.webp'),
          title:'米家净水器1000G',
          desc:'澎湃大水量，5年免换RO滤芯',
          price: 1799,
          flag1:false,
          flag2:true,
          oldPrice:2499
        },
        {
          url:require('../assets/gridKitchen/k7.webp'),
          title:'小米净水器H800G Pro',
          desc:'长效过滤，鲜活好水随心出',
          price: 1599,
          flag1:false,
          flag2:true,
          oldPrice:1999
        },
        {
          url:require('../assets/gridKitchen/k8.webp'),
          title:'小米即热净水器Q800',
          desc:'净水速热二合一',
          price: 2499,
          flag1:false,
          flag2:true,
          oldPrice:3999
        },
        {
          url:require('../assets/gridKitchen/k9.webp'),
          title:'米家净水器1200G',
          desc:'澎湃出水 高端净水新选择',
          price: 1999,
          flag1:false,
          flag2:true,
          oldPrice:2799
        }
      ],
      householdData:[
        {
          url:require('../assets/gridHousehold/s2.webp'),
          title:'Xiaomi智能家庭屏 10',
          desc:'MIUI Home｜10.1" 高清大屏｜115°超广角摄像头｜儿童模式｜家庭 KTV｜小爱同学',
          price: 979,
          flag1:false,
          flag2:true,
          oldPrice:999
        },
        {
          url:require('../assets/gridHousehold/s3.webp'),
          title:'小米小爱音箱Play 增强版',
          desc:'LED时钟显示，语音控制传统家电',
          price: 129,
          flag1:false,
          flag2:true,
          oldPrice:149
        },
        {
          url:require('../assets/gridHousehold/s4.webp'),
          title:'小米小爱音箱 Play',
          desc:'听音乐、语音遥控家电',
          price: 99,
          flag1:false,
          flag2:true,
          oldPrice:109
        },
        {
          url:require('../assets/gridHousehold/s5.webp'),
          title:'小米小爱音箱 Pro',
          desc:'澎湃低音，语音遥控传统家电',
          price: 299,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridHousehold/s7.webp'),
          title:'小米AI音箱（第二代）',
          desc:'低频饱满有深度，人声清晰有细节',
          price: 199,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridHousehold/s8.webp'),
          title:'小米小爱触屏音箱',
          desc:'可视化智能家居，海量视听资源',
          price: 249,
          flag1:false,
          flag2:true,
          oldPrice:269
        },
        {
          url:require('../assets/gridHousehold/s9.webp'),
          title:'小米小爱音箱',
          desc:'Hi-Fi级音频芯片，支持AUX IN接口，你桌面的有源音箱',
          price: 249,
          flag1:false,
          flag2:false,
          oldPrice:0
        }
      ],
      sportsData:[
        {
          url:require('../assets/gridSports/c2.jpg'),
          title:'九号平衡车',
          desc:'年轻人的酷玩具',
          price: 2199,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridSports/c3.webp'),
          title:'九号平衡车燃动版',
          desc:'燃动升级，随走随停',
          price: 2599,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridSports/c4.png'),
          title:'九号平衡车 Plus',
          desc:'一个形影不离的新伙伴',
          price: 3299,
          flag1:false,
          flag2:true,
          oldPrice:3499
        },
        {
          url:require('../assets/gridSports/c5.webp'),
          title:'米家电动滑板车1S',
          desc:'型出格，行出色',
          price: 2199,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridSports/c7.webp'),
          title:'小米米家电动滑板车Pro',
          desc:'性能提升，动力更强劲',
          price: 2999,
          flag1:false,
          flag2:true,
          oldPrice:3099
        },
        {
          url:require('../assets/gridSports/c8.webp'),
          title:'九号卡丁车Pro兰博基尼汽车定制版',
          desc:'九号卡丁车Pro兰博基尼汽车定制版',
          price: 9999,
          flag1:false,
          flag2:false,
          oldPrice:0
        },
        {
          url:require('../assets/gridSports/c9.webp'),
          title:'九号平衡车 改装套件（不含平衡车）',
          desc:'小朋友的大玩具，老顽童的小赛车',
          price: 2999,
          flag1:false,
          flag2:false,
          oldPrice:0
        }
      ]
    }
  },
  methods:{
    toTop(){
      document.documentElement.scrollTop = 0;
      window.pageYOffset = 0;
      document.body.scrollTop = 0;
    }
  }
}
</script>
