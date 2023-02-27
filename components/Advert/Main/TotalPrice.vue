<template>
  <div class="total-price">
    <div class="total-price__inner">
      <div class="total-price__balance">
        <p>Баланс: 0 ₽</p>
        <span>Пополнить</span>
      </div>
      <div class="total-price__price">
        <div class="total-price__text">
          <span>Премиум:</span>
          <p><b>382</b> ₽ на 7 дней</p>
        </div>
        <p class="total-price__total">Итого: 917 ₽</p>
        <p class="total-price__info">
          Недостаточно средств на счету. <span>Пополнить</span>
        </p>
      </div>
    </div>
    <div class="total-price__buttons">
      <button class="btn btn-white">Просмотреть</button>
      <button class="btn btn-white">Сохранить черновик</button>
      <button class="btn btn-green">Разместить объявление</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.total-price {
  margin-top: 2.2rem;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__balance {
    font-size: 1.6rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    justify-content: center;
    & span {
      color: $green-color;
    }
  }
  &__text {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: flex-end;
    & span {
      color: $secondary-color;
    }
    & p {
      font-size: 2.4rem;
    }
  }
  &__total {
    margin-top: 1.1rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 100%;
    text-align: right;
  }
  &__info {
    & span {
      color: $green-color;
    }
  }
  &__buttons {
    margin-top: 4.7rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin-bottom: 7rem;
    & button {
      padding: 1.5rem 3.8rem;
      font-size: 2rem;
    }
  }
}
</style>
