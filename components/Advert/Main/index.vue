<template>
  <div class="advert-main">
    <div class="advert-main__item">
      <div class="advert-main__title advert-main__title_first">Новое объявление</div>
      <div class="advert-main__subtitle">Объявление будет доступно на <a target="_blank" href="/">Баня.ру</a> и в нашем <a target="_blank" href="/">мобильном приложении</a></div>
      <AdvertMainType />
    </div>

    <div class="advert-main__item">
      <div class="advert-main__title">Новое объявление</div>
      <AdvertMainLocation />
      <AdvertMainBuildingType />
      <AdvertMainName />
      <AdvertMainWorktime />
      <AdvertMainFacilities />
      <AdvertMainPhoto />
      <AdvertMainSocial />
      <AdvertMainContacts />
      <div class="advert-main__title advert-main__title_zal">Зал</div>
      <div class="advert-main__zal">
        <span>Активность <img src="" alt="" /></span>
        <input class="switch" type="checkbox" />
      </div>
      <AdvertMainZalName />
      <AdvertMainZalPrice />
      <AdvertMainZalTime />
      <AdvertMainZalFacilities />
      <AdvertMainZalDiscount />
      <AdvertMainZalService />
      <LazyAdvertMainZalBooking />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advert-main {
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
  max-width: 106rem;
  width: 100%;
  &__item{
    display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(123, 129, 148, 0.15);
  border-radius: 2.3rem;
  padding: 0 5rem;
  }
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 100%;
    margin-top: 3.9rem;
    margin-bottom: 5.7rem;
    &_first{
      margin-bottom: 1.5rem;
    }
    &_zal {
      margin-bottom: 1.9rem;
    }
  }
  &__subtitle{
    text-align: center;
    margin-bottom: 2.6rem;
    color:$secondary-color;
    max-width: 26rem;
    margin-left: auto;
    margin-right: auto;
    & a{
      color:$green-color;
    }
  }
  &__zal {
    justify-content: center;
    display: flex;
    gap: 6rem;
    padding-bottom: 5.9rem;
    border-bottom: 1px solid rgba(143, 153, 186, 0.2);
  }
}
</style>
