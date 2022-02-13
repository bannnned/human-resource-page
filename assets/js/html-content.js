//Кнопки предложить и в избранное
const rightButtons = `
<div class="right__buttons">
<button class="right__buttons-offer">
  <p class="right__buttons-offer-text">Предложить вакансию</p>
  <img
    src="./assets/img/check.svg"
    alt=""
    class="right__buttons-offer-checkmark inactive-display"
  />
</button>
<button class="right__cancel-button top inactive">
            Отмена
        </button>
<div class="right__vacancy-list top inactive">
  <!-- 1 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.75C7.03835 0.75 8.05338 1.05791 8.91674 1.63478C9.7801 2.21166 10.453 3.0316 10.8504 3.99091C11.2477 4.95022 11.3517 6.00582 11.1491 7.02422C10.9465 8.04262 10.4465 8.97808 9.71231 9.71231C8.97808 10.4465 8.04262 10.9465 7.02422 11.1491C6.00582 11.3517 4.95022 11.2477 3.99091 10.8504C3.0316 10.453 2.21166 9.7801 1.63478 8.91674C1.05791 8.05338 0.75 7.03835 0.75 6C0.75 4.60761 1.30312 3.27225 2.28769 2.28769C3.27225 1.30312 4.60761 0.75 6 0.75Z"
        stroke-width="1"
      />
      <path
        d="M5.94316 5.86454V5.57586V3.04134C5.94316 3.03073 5.93895 3.02056 5.93144 3.01306C5.92394 3.00556 5.91377 3.00134 5.90316 3.00134C5.89255 3.00134 5.88238 3.00556 5.87487 3.01306C5.86737 3.02056 5.86316 3.03073 5.86316 3.04134V5.92075C5.86321 5.92992 5.86652 5.93878 5.8725 5.94574C5.87851 5.95274 5.88683 5.95736 5.89595 5.95876L6.0361 5.98034L6.14405 6.07227C6.14508 6.07314 6.14616 6.07396 6.14727 6.07472L8.63512 7.51105C8.6443 7.51635 8.65522 7.51779 8.66547 7.51504C8.67571 7.5123 8.68444 7.5056 8.68974 7.49642L5.94316 5.86454ZM5.94316 5.86454L6.19316 6.00888M5.94316 5.86454L6.19316 6.00888M6.19316 6.00888L8.6751 7.44179C8.67511 7.44179 8.67512 7.44179 8.67512 7.4418C8.6843 7.4471 8.691 7.45583 8.69374 7.46607C8.69648 7.47632 8.69505 7.48722 8.68975 7.49641L6.19316 6.00888Z"
      />
    </svg>
    <p class="right__vacancy-text">Подумать</p>
  </div>
  <!-- 2 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6688 11.7782L20.6689 11.7782L21.1997 11.9381L21.3295 11.9814C21.6875 12.1137 22.0032 12.3399 22.2436 12.6364C22.4854 12.9346 22.6419 13.2929 22.6964 13.6729L22.6965 13.673C22.8966 15.0664 22.4564 16.7627 21.2824 18.7962C20.1113 20.8244 18.8651 22.0527 17.561 22.5785C17.1835 22.7306 16.7703 22.7711 16.3704 22.6952C15.9706 22.6194 15.6009 22.4303 15.3054 22.1504L14.9069 21.7725L14.8313 21.6944C14.6845 21.5255 14.5986 21.3122 14.5874 21.0885C14.5761 20.8616 14.6423 20.6376 14.7753 20.4533C14.7753 20.4533 14.7753 20.4533 14.7753 20.4533L15.7859 19.0532L15.8378 18.9882C15.9163 18.9023 16.0172 18.8399 16.1293 18.8082C16.2448 18.7755 16.3672 18.7768 16.4819 18.8119C16.482 18.8119 16.482 18.8119 16.482 18.8119L18.0202 19.2821L18.0466 19.2902L18.0737 19.2953L18.1134 19.3028L18.1594 19.3115H18.2061H18.2384H18.2658L18.2931 19.3084C18.4691 19.2891 18.6128 19.201 18.7065 19.132C18.8113 19.0549 18.915 18.9552 19.0164 18.8416C19.2199 18.6135 19.4473 18.2912 19.6876 17.875L19.6877 17.8749C19.9534 17.4146 20.1289 17.0244 20.217 16.7129C20.2606 16.5586 20.2895 16.4007 20.2859 16.2511C20.2827 16.1134 20.2491 15.8957 20.0741 15.729L20.0741 15.729L20.0703 15.7254L19.2945 15.0024L19.2086 14.9165C19.0295 14.7199 18.9114 14.4754 18.8687 14.2128C18.8255 13.9471 18.8614 13.6746 18.9718 13.4291C18.9718 13.4291 18.9718 13.4291 18.9718 13.4291L19.4644 12.3346L19.5102 12.2424C19.6212 12.0467 19.7949 11.894 20.0035 11.8092C20.2152 11.7232 20.45 11.7122 20.6688 11.7782Z"
      />
      <path
        d="M12.274 18.9074H6.35474C6.13382 18.9074 5.95474 18.7283 5.95474 18.5074V16.3131C5.95474 14.9876 7.02925 13.9131 8.35474 13.9131H13.5063C13.8015 13.9131 14.1805 14.0248 14.5814 14.2395C14.976 14.4508 15.3457 14.7375 15.6168 15.0286C15.8931 15.3254 15.9985 15.5523 16.0166 15.6602C15.9974 15.6703 15.966 15.6838 15.9171 15.6975C15.7443 15.7462 15.4726 15.8258 15.1429 16.1098C15.0141 16.2207 14.8577 16.3351 14.6674 16.472C14.6533 16.4821 14.639 16.4924 14.6246 16.5028C14.4514 16.6273 14.2561 16.7677 14.0649 16.9212C13.6509 17.2536 13.204 17.6868 12.9312 18.2879C12.7336 18.7235 12.4636 18.9074 12.274 18.9074Z"
        stroke-width="1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.63501 5.79114C1.63501 4.13428 2.97816 2.79114 4.63501 2.79114H19.1187C20.7756 2.79114 22.1187 4.13428 22.1187 5.79114V8.95916H20.9187V5.79114C20.9187 4.79703 20.1128 3.99114 19.1187 3.99114H4.63501C3.6409 3.99114 2.83501 4.79703 2.83501 5.79114V16.4579C2.83501 17.452 3.6409 18.2579 4.63501 18.2579H8.87898V19.4579H4.63501C2.97816 19.4579 1.63501 18.1147 1.63501 16.4579V5.79114Z"
      />
      <path
        d="M13.1549 8.95105C13.1549 10.3036 12.0584 11.4 10.7059 11.4C9.35341 11.4 8.25698 10.3036 8.25698 8.95105C8.25698 7.59853 9.35341 6.5021 10.7059 6.5021C12.0584 6.5021 13.1549 7.59853 13.1549 8.95105Z"
        stroke-width="1"
      />
    </svg>
    <p class="right__vacancy-text">Видеособеседование</p>
  </div>
  <!-- 3 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.44444 15H9.55556M13.4444 15V2.55556C13.4444 2.143 13.2806 1.74733 12.9888 1.45561C12.6971 1.16389 12.3014 1 11.8889 1H4.11111C3.69855 1 3.30289 1.16389 3.01117 1.45561C2.71944 1.74733 2.55556 2.143 2.55556 2.55556V15H13.4444ZM13.4444 15H15H13.4444ZM13.4444 15H9.55556H13.4444ZM2.55556 15H1H2.55556ZM2.55556 15H6.44444H2.55556ZM5.66667 4.11111H6.44444H5.66667ZM5.66667 7.22222H6.44444H5.66667ZM9.55556 4.11111H10.3333H9.55556ZM9.55556 7.22222H10.3333H9.55556ZM6.44444 15V11.1111C6.44444 10.9048 6.52639 10.707 6.67225 10.5611C6.81811 10.4153 7.01594 10.3333 7.22222 10.3333H8.77778C8.98406 10.3333 9.18189 10.4153 9.32775 10.5611C9.47361 10.707 9.55556 10.9048 9.55556 11.1111V15H6.44444Z"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <p class="right__vacancy-text">Интервью в офисе</p>
  </div>
  <!-- 4 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.948 4.44276C8.74831 4.20494 8.40431 4.14977 8.14027 4.31322L6.6678 5.22477C5.51241 5.94002 4.97287 7.17819 5.34187 8.31528C5.85991 9.91161 6.81772 12.1267 8.56594 14.4829C10.3167 16.8426 12.3553 18.4256 13.9235 19.4061C15.0335 20.1001 16.4952 19.7975 17.4665 18.6854L18.6224 17.362C18.8325 17.1214 18.8275 16.7611 18.6107 16.5265L16.727 14.4885C16.537 14.2829 16.2333 14.2287 15.9839 14.356L14.1417 15.2959C13.9159 15.4111 13.6494 15.415 13.4203 15.3065C12.366 14.8071 11.4505 13.8326 10.7602 12.9228C10.056 11.9947 9.5137 11.0361 9.22674 10.4519C9.09233 10.1783 9.12136 9.85262 9.30204 9.60708L10.8706 7.47551C11.0415 7.24317 11.0313 6.92402 10.8458 6.7031L8.948 4.44276ZM7.27978 2.92321C8.23438 2.33226 9.47807 2.53172 10.2 3.39155L12.0978 5.65188C12.7684 6.45058 12.8054 7.60445 12.1873 8.44443L10.9206 10.1658C11.1931 10.6633 11.5879 11.3091 12.0625 11.9347C12.6032 12.6473 13.1985 13.2676 13.7854 13.6424L15.2409 12.8997C16.1427 12.4397 17.2404 12.6354 17.9276 13.3789L19.8112 15.4169C20.5951 16.265 20.6134 17.5676 19.8537 18.4374L18.6978 19.7608C17.3123 21.3471 14.9848 21.9976 13.0569 20.7923C11.3638 19.7338 9.15535 18.021 7.25303 15.457C5.38239 12.9358 4.35019 10.5557 3.7869 8.81989C3.13697 6.81712 4.15593 4.85705 5.8073 3.83476L7.27978 2.92321Z"
      />
    </svg>
    <p class="right__vacancy-text">Телефонное интервью</p>
  </div>
  <!-- 5 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.47949 3.13049C2.47949 2.30206 3.15107 1.63049 3.97949 1.63049H17.8878C18.7163 1.63049 19.3878 2.30207 19.3878 3.13049V12.8501C19.3878 13.2643 19.0521 13.6001 18.6378 13.6001C18.2236 13.6001 17.8878 13.2643 17.8878 12.8501L17.8878 3.13049L3.97949 3.13049V20.7626H12.1066C12.5209 20.7626 12.8566 21.0984 12.8566 21.5126C12.8566 21.9268 12.5209 22.2626 12.1066 22.2626H3.97949C3.15107 22.2626 2.47949 21.5911 2.47949 20.7626V3.13049Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.21021 7.02087C6.21021 6.60666 6.54599 6.27087 6.96021 6.27087H14.907C15.3212 6.27087 15.657 6.60666 15.657 7.02087C15.657 7.43509 15.3212 7.77087 14.907 7.77087H6.96021C6.54599 7.77087 6.21021 7.43509 6.21021 7.02087Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.21021 10.0209C6.21021 9.60666 6.54599 9.27087 6.96021 9.27087H14.907C15.3212 9.27087 15.657 9.60666 15.657 10.0209C15.657 10.4351 15.3212 10.7709 14.907 10.7709H6.96021C6.54599 10.7709 6.21021 10.4351 6.21021 10.0209Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.21021 13.0209C6.21021 12.6067 6.54599 12.2709 6.96021 12.2709H10.6567C11.0709 12.2709 11.4067 12.6067 11.4067 13.0209C11.4067 13.4351 11.0709 13.7709 10.6567 13.7709H6.96021C6.54599 13.7709 6.21021 13.4351 6.21021 13.0209Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2044 14.5896C21.5422 14.8292 21.6219 15.2973 21.3823 15.6352L17.3196 21.3642C16.7998 22.0972 15.7566 22.2118 15.09 21.6092L12.3293 19.1132C12.022 18.8354 11.9982 18.3611 12.2759 18.0539C12.5537 17.7466 13.028 17.7228 13.3353 18.0005L16.096 20.4965L20.1587 14.7675C20.3983 14.4296 20.8665 14.35 21.2044 14.5896Z"
      />
    </svg>
    <p class="right__vacancy-text">Тестовое задание</p>
  </div>
  <!-- 6 -->
  <div class="right__vacancy">
    <svg
      class="right__vacancy-img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.787 14.8738V7.67167M6.12567 14.4303V7.67329M2.56149 21.5525L8.14401 16.4504M2.56149 21.5525C2.9222 21.8552 3.86169 21.8028 4.01192 21.7923C4.02595 21.7913 4.03936 21.7907 4.05343 21.7907H20.2497C20.2633 21.7907 20.2768 21.7902 20.2903 21.7888C20.4176 21.7751 21.1115 21.6829 21.3518 21.2809M2.56149 21.5525C2.34759 21.3764 2.39457 20.2003 2.40056 20.068C2.40094 20.0596 2.40113 20.0517 2.40113 20.0432V12.5211C2.40113 12.5211 2.40113 12.5211 2.40113 12.5211C2.40113 12.5211 2.40113 11.8156 2.40113 11.5097M21.3518 21.2809C19.1606 19.3685 15.7232 16.4504 15.7232 16.4504M21.3518 21.2809C21.6495 20.7729 21.6088 19.8216 21.6012 19.6853C21.6006 19.6739 21.6003 19.6632 21.6003 19.6518V12.2479C21.6003 12.2479 21.6003 12.2479 21.6003 12.2479C21.6003 12.2479 21.6003 11.8208 21.4352 11.5097M21.4352 11.5097L15.7232 16.4504M21.4352 11.5097C21.2358 11.1338 20.92 10.7606 20.8561 10.6866C20.8484 10.6776 20.8404 10.6692 20.8319 10.6609L17.787 7.67167M2.40113 11.5097L8.14401 16.4504M2.40113 11.5097C2.40113 11.183 3.10058 10.5327 3.15201 10.4854C3.15419 10.4833 3.15606 10.4816 3.15822 10.4796L6.12567 7.67329M6.12567 7.67329V5.57465C6.12567 5.2985 6.34953 5.07465 6.62567 5.07465H8.71223M8.71223 5.07465L11.5687 2.63252C11.7541 2.47397 12.0269 2.47241 12.2141 2.62884L15.1417 5.07465M8.71223 5.07465H15.1417M17.787 7.67167V5.57465C17.787 5.29851 17.5632 5.07465 17.287 5.07465H15.1417M8.14401 16.4504L11.5533 13.2801C11.7436 13.1032 12.0377 13.1015 12.23 13.2762L15.7232 16.4504"
        stroke-width="1"
      />
    </svg>
    <p class="right__vacancy-text">Предложение о работе</p>
  </div>
  <!-- 7 -->
  <div class="right__vacancy no-border">
    <svg
      class="right__vacancy-img"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 7.00024H4C2.89543 7.00024 2 7.89567 2 9.00024V19.0002C2 20.1048 2.89543 21.0002 4 21.0002H20C21.1046 21.0002 22 20.1048 22 19.0002V9.00024C22 7.89567 21.1046 7.00024 20 7.00024Z"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 7.28693V5.00024C16 4.46981 15.7893 3.9611 15.4142 3.58603C15.0391 3.21096 14.5304 3.00024 14 3.00024H10C9.46957 3.00024 8.96086 3.21096 8.58579 3.58603C8.21071 3.9611 8 4.46981 8 5.00024V7.28693"
        stroke-width="1"
        stroke-linejoin="round"
      />
      <path
        d="M20.641 7.28689V9.94522C20.641 10.5619 20.1858 11.1532 19.3755 11.5893C18.5653 12.0253 17.4664 12.2703 16.3205 12.2703H7.67959C6.53373 12.2703 5.43481 12.0253 4.62457 11.5893C3.81432 11.1532 3.35913 10.5619 3.35913 9.94522V7.28689"
        stroke-width="1"
        stroke-linejoin="round"
      />
      <path
        d="M10.4375 14.0002H13.5625"
        stroke-width="1"
        stroke-linecap="round"
      />
    </svg>
    <p class="right__vacancy-text">Выход на работу</p>
  </div>
</div>
<button class="right__buttons-like">
  <svg
    class="right__buttons-like-svg"
    width="23"
    height="21"
    viewBox="0 0 23 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7476 3.84552L11.5 4.70487L12.2524 3.84552C13.2474 2.70902 14.7857 1.9823 16.3801 1.9823C19.1943 1.9823 21.3446 4.11313 21.3446 6.7836C21.3446 8.43947 20.5882 10.0249 19.0376 11.8688C17.4764 13.7252 15.224 15.7142 12.411 18.1952L12.4096 18.1965L11.4975 19.0041L10.5898 18.2065C10.5894 18.2062 10.589 18.2058 10.5886 18.2055C7.77591 15.7194 5.52384 13.7281 3.96267 11.8703C2.41185 10.0249 1.6554 8.43949 1.6554 6.7836C1.6554 4.11313 3.80574 1.9823 6.61993 1.9823C8.21433 1.9823 9.75259 2.70902 10.7476 3.84552Z"
    />
  </svg>
</button>
</div>`;

//Информация о видеособеседовании
const videoInterview = ` 
<div class="right__video">
  <img
    src="./assets/img/big-video-interview.svg"
    alt=""
    class="right__video-img"
  />
  <div class="right__video-text">
    <h1 class="right__video-text-title">Видеособеседование</h1>
    <div class="right__video-text-paragraph">
      Пригласите кандидата пройти собеседование онлайн
    </div>
  </div>
</div>`;

//Зарплата и три точки
const salary = `
<div class="right__header">
  <h1 class="right__header-salary">55 000 ₽</h1>
  <img
    src="./assets/img/three-dots.svg"
    alt=""
    class="right__header-dots"
  />
</div>`;

export { rightButtons, videoInterview, salary };
