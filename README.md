# Chasinsa

> 의류 쇼핑몰 프로젝트

# 배포 주소

> **Frontend :** https://mellow-fenglisu-3e491d.netlify.app

## 프로젝트 소개

파이어베이스를 사용하여 로그인, DB CRUD을 구현하였으며,  
Cloudinary를 사용하여 이미지 링크를 만들어 보여주는 쇼핑몰 프로젝트 입니다

## 시작 가이드

### TEST 계정 (관리자권한)

```
ID : chasinsatest@gamil.com
PW : 369z369z^
```

### Installation

```bash
$ git clone https://github.com/chb6734/chasinsa.git
$ cd chasinsa
```

### Frontend

```
$ yarn install
$ yarn start
```

## Stacks 💻

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![yarn](https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![firebase](https://img.shields.io/badge/firebase-white?style=for-the-badge&logo=firebase&logoColor=#FFCA28)

## 화면 구성 📺

|                                                                                   홈 화면                                                                                    |                                                                               제품 상세 페이지                                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://res.cloudinary.com/doqdsre2t/image/upload/v1681718124/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-17_%EC%98%A4%ED%9B%84_4.52.38_jlae0y.png"/> | <img width="329" src="https://res.cloudinary.com/doqdsre2t/image/upload/v1681718124/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-17_%EC%98%A4%ED%9B%84_4.52.55_dvybtl.png"/> |
|                                                                               장바구니 페이지                                                                                |                                                                               상품 추가 페이지                                                                               |
| <img width="329" src="https://res.cloudinary.com/doqdsre2t/image/upload/v1681718124/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-17_%EC%98%A4%ED%9B%84_4.53.11_zd1izs.png"/> | <img width="329" src="https://res.cloudinary.com/doqdsre2t/image/upload/v1681718124/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2023-04-17_%EC%98%A4%ED%9B%84_4.54.09_tihh4n.png"/> |

## |

## 주요 기능 📦

### ⭐️ 홈화면

- DB에 저장된 상품들 조회

### ⭐️ 제품 상세페이지

- DB에 저장된 상품의 상세 내용들을 조회
- 장바구니에 추가 하면 장바구니에 해당 상품이 저장이 됨.(로그인을 해야함)

### ⭐️ 장바구니 (로그인 해야 보여짐)

- 로그인 한 아이디의 장바구니가 보여짐
- 장바구니에 넣은 상품의 가격과 배송비(3000원)을 더하여 계산한 값을 보여줌
- 장바구니에 넣은 상품의 개수를 늘릴 수 있음

### ⭐️ 상품 추가 페이지 (관리자권한 아이디에서만 보여짐)

- 상품을 추가할 수 있음
