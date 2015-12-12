<?php

/* @var $this yii\web\View */

$this->title = 'RichWork';
?>
<div class="b-curtain js-curtain"></div>
<div class="l-wrapper">
    <header class="b-header b-wrapper">
        <a href="/" class="b-header__logo"><img src="http://www.u22461.netangels.ru/sites/default/files/14383362007073.jpg" /></a><div class="b-header__add-vacancy" data-toggle="modal" data-target="#modal-enter">Разместить вакансию</div><div class="b-header__add-resume" data-toggle="modal" data-target="#modal-enter">Разместить резюме</div><div class="b-header__enter" data-toggle="modal" data-target="#modal-enter">Вход или регистрация</div><div class="b-header__city"><div class="b-header__city-link js-city">Екатеринбург</div></div></header>    <aside class="b-splash b-wrapper">
        <div class="b-adult">
            <div class="b-adult__circle" data-toggle="modal" data-target="#12345">18</div><div class="b-adult__note">Перед началом работы узнайте почему</div></div>        <div class="b-splash__head">Работа не волк — но укусит</div>
        <div class="b-splash__subhead">работа для тех, кто ее не боится</div>
    </aside>
    <aside class="b-search b-wrapper">
        <form name="form_search" id="form-search" action="">
            <div class="b-search__input">
                <input type="text" class="b-form__text b-form__text_size_l" placeholder="массажистка">
            </div>
            <div class="b-search__button">
                <input type="submit" class="b-button" value="Найти">
            </div>
            <div class="b-search__controls">
                <div class="b-search__control b-active b-search__control_type_job js-radio" data-radio="search">Поиск
                    работы
                </div>
                <div class="b-search__control b-search__control_type_resume js-radio" data-radio="search">Поиск резюме
                </div>
                <div class="b-search__control b-search__control_type_extra js-extra-search">Расширенный поиск</div>
            </div>
        </form>
        <div class="b-search__line js-line"></div>
    </aside>
    <aside class="b-extra-search b-wrapper js-filters">
        <div class="b-extra-search__inner">
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Город</div>
                <div class="b-extra-search__link">
                    <i class="b-extra-search__remove"></i>
                    Екатеринбург
                </div>
                <div class="b-extra-search__add">добавить город</div>
            </div>
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Отрасли</div>
                <div class="b-extra-search__link js-checkbox">Массажные салоны</div>
                <div class="b-extra-search__link b-active js-checkbox">Ночные клубы</div>
                <div class="b-extra-search__link js-checkbox">Rich Persons</div>
                <div class="b-extra-search__link js-checkbox">Работа в офисе</div>
                <div class="b-extra-search__link js-checkbox">Бани, сауны</div>
                <div class="b-extra-search__link js-checkbox">Работа за границей</div>
                <div class="b-extra-search__link js-checkbox">Искусство</div>
                <div class="b-extra-search__link js-checkbox">Развлечения, досуг</div>
                <div class="b-extra-search__link b-active js-checkbox">Домашний персонал</div>
                <div class="b-extra-search__link js-checkbox">Эскорт</div>
                <div class="b-extra-search__link js-checkbox">Агентства</div>
            </div>
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Работа для</div>
                <div class="b-extra-search__link b-extra-search__link_sex_woman b-active js-checkbox">Женщин</div>
                <div class="b-extra-search__link b-extra-search__link_sex_man b-active js-checkbox">Мужчин</div>
            </div>
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Зарплата</div>
                <div class="b-extra-search__link b-extra-search__link_type_salary js-radio" data-radio="salary">
                    <span class="b-extra-search__prefix">от</span>
                    10 000
                    <span class="b-extra-search__suffix b-rouble">&#x20CF;</span>
                </div>
                <div class="b-extra-search__link b-extra-search__link_type_salary js-radio" data-radio="salary">30 000
                </div>
                <div class="b-extra-search__link b-extra-search__link_type_salary js-radio" data-radio="salary">40 000
                </div>
                <div class="b-extra-search__link b-extra-search__link_type_salary js-radio" data-radio="salary">50 000
                </div>
                <div class="b-extra-search__link b-extra-search__link_type_salary b-active js-radio"
                     data-radio="salary"> 60 000
                </div>
                <div class="b-extra-search__link b-extra-search__link_type_salary js-radio" data-radio="salary">100 000
                </div>
            </div>
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Опубликовано</div>
                <div class="b-extra-search__link js-radio" data-radio="date">24 час</div>
                <div class="b-extra-search__link js-radio" data-radio="date">Неделя</div>
                <div class="b-extra-search__link js-radio" data-radio="date">Месяц</div>
                <div class="b-extra-search__link js-radio" data-radio="date">За все время</div>
            </div>
            <div class="b-extra-search__col">
                <div class="b-extra-search__label">Тип занятости</div>
                <div class="b-extra-search__link js-checkbox">Полная</div>
                <div class="b-extra-search__link js-checkbox">Частичная</div>
                <div class="b-extra-search__link js-checkbox">Сменный график</div>
                <div class="b-extra-search__link js-checkbox">Неполный день</div>
                <div class="b-extra-search__link js-checkbox">Временная работа</div>
            </div>
            <div class="b-extra-search__reset js-reset">сбросить</div>
            <div class="b-extra-search__apply js-apply">готово</div>
        </div>
    </aside>
    <aside class="b-links b-wrapper">
        <div class="b-links__col b-links__col_num_1"><div class="b-links__label">Работа<br>по отрослям</div></div><div class="b-links__col b-links__col_num_2"><p><a class="b-links__link" href="vacancies">Массажные салоны</a></p>

            <p><a class="b-links__link" href="vacancies.html">Ночные клубы</a></p>

            <p><a class="b-links__link" href="vacancies.html">Rich Persons</a></p>

            <p><a class="b-links__link" href="vacancies.html">Работа в офисе</a></p>

            <p><a class="b-links__link" href="vacancies.html">Бани, сауны</a></p>

            <p><a class="b-links__link" href="vacancies.html">Работа за границей</a></p>
        </div><div class="b-links__col b-links__col_num_3"><p><a class="b-links__link" href="vacancies.html">Искусство</a></p>

            <p><a class="b-links__link" href="vacancies.html">Развлечения, досуг</a></p>

            <p><a class="b-links__link" href="vacancies.html">Домашний персонал</a></p>

            <p><a class="b-links__link" href="vacancies.html">Эскорт</a></p>

            <p><a class="b-links__link" href="vacancies.html">Агентства</a></p>
        </div>        <div class="b-links__col b-links__col_num_4"><div class="b-links__label">Как<br>это работает</div></div><div class="b-links__col b-links__col_num_5"><div class="b-links__private">
                <strong>Когда вы размещаете свое резюме</strong>
                это <div class="b-ajax-link" data-toggle="modal" data-target="#zashchita-personalnyh-dannyh">конфиденциально</div>
            </div>
            <div class="b-links__private-note">Перед началом работы ознакомьтесь с правилами сайта</div></div>    </aside>
</div>
<div class="b-modal b-modal-fos" id="modal-fos">
    <div class="b-modal__dialog b-modal-fos__dialog">
        <div class="b-modal__content">
            <button type="button" class="b-modal__close" data-dismiss="modal" title="Закрыть">&times;</button>
            <div class="b-modal__header">
                <h4 class="b-modal__title b-modal-fos__title">Обратная связь</h4>
            </div>
            <div class="b-modal__body b-modal-fos__body">
                <form name="form_enter">
                    <div class="b-modal-fos__row">
                        <input type="text" class="b-form__text" placeholder="Имя" autocomplete="off">
                    </div>
                    <div class="b-modal-fos__row">
                        <input type="test" class="b-form__text" placeholder="Телефон или почта" autocomplete="off">
                    </div>
                    <div class="b-modal-fos__row">
                        <textarea class="b-form__textarea" placeholder="Сообщение"></textarea>
                    </div>
                    <div class="b-modal-fos__row b-modal-fos__row_submit_yes">
                        <input type="submit" name="submit-btn" class="b-button b-modal-fos__button"
                               value="Отправить" onClick="return false;">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>