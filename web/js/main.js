var radio = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$elems = $('.js-radio');
    },

    _bindEvents: function () {
        var self = this;

        self._$elems.on('click', function () {
            var $this = $(this),
                name = $this.data('radio'),
                $siblings = self._$elems.filter('[data-radio=' + name + ']');

            $siblings.removeClass(self._activeClass);
            $this.addClass(self._activeClass);
        });
    }
};

var checkbox = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$elems = $('.js-checkbox');
    },

    _bindEvents: function () {
        var self = this;

        self._$elems.on('click', function () {
            var $this = $(this);

            if ($this.hasClass(self._activeClass)) {
                $this.removeClass(self._activeClass);
            } else {
                $this.addClass(self._activeClass);
            }
        });
    }
};

var filters = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$filters = $('.js-filters');
        self._$resetBtn = $('.js-reset');
        self._$applyBtn = $('.js-apply');
    },

    _bindEvents: function () {
        var self = this;

        self._$resetBtn.on('click', function () {
            self._$filters
                .find('.' + self._activeClass)
                .removeClass(self._activeClass);
        });

        self._$applyBtn.on('click', function () {
            alert('Фильтруем...');
        });
    }
};

var search = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$curtain = $('.js-curtain');
        self._$filters = $('.js-filters');
        self._$line = $('.js-line');
        self._$extraBtn = $('.js-extra-search');
    },

    _bindEvents: function () {
        var self = this;

        self._$extraBtn.on('click', function () {
            if (self._$curtain.hasClass(self._activeClass)) {
                self._$curtain.removeClass(self._activeClass);
                self._$filters.fadeOut(300);
                setTimeout(function () {
                    self._$line.fadeIn(200);
                }, 100);
            } else {
                self._$curtain.addClass(self._activeClass);
                self._$filters.fadeIn(300);
                self._$line.fadeOut(100);
            }
        });
    }
};

var resume = {
    _activeClass: 'b-active',
    _disabledClass: 'b-disabled',
    _thumbWidth: 0,
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this,
            $block,
            i;

        self._$blocks = $('.js-resume-photos');
        self._length = self._$blocks.length;

        self._$previews = [];
        self._$previewsImages = [];
        self._$slider = [];
        self._$thumbsImages = [];
        self._thumbsImagesCount = [];
        self._thumbsImagesExtraCount = [];

        self._$prevImageControl = [];
        self._$nextImageControl = [];
        self._$currentImageNum = [];
        self._currentImageIndex = [];

        for (i = 0; i < self._length; i++) {
            $block = self._$blocks.eq(i);
            self._$previews[i] = $block.find('.js-resume-photos__previews');
            self._$previewsImages[i] = self._$previews[i].find('img');

            self._$slider[i] = $block.find('.js-resume-photos__slider');
            self._$thumbsImages[i] = self._$slider[i].find('img');
            self._thumbsImagesCount[i] = self._$thumbsImages[i].length;

            self._$prevImageControl[i] = $block.find('.js-resume-photos__prev');
            self._$nextImageControl[i] = $block.find('.js-resume-photos__next');
            self._$currentImageNum[i] = $block.find('.js-resume-photos__current');

            self._thumbsImagesExtraCount[i] = $block.data('thumbs-extra-count');
            self._currentImageIndex[i] = 0;
        }

        if (i > 0) {
            self._thumbWidth = self._$thumbsImages[0].width();
        }
    },

    _bindEvents: function () {
        var self = this,
            prevPageIndex,
            nextPageIndex,
            imagesCount,
            $thumbImage,
            i;

        for (i = 0; i < self._length; i++) {
            self._$thumbsImages[i].each(function (index) {
                $thumbImage = $(this);

                (function (imageIndex, blockIndex) {
                    $thumbImage.on('click', function () {
                        self._changePhoto(blockIndex, imageIndex + 1);
                    });
                }(index, i));

            });

            (function (blockIndex) {
                self._$prevImageControl[blockIndex].on('click', function () {
                    prevPageIndex = self._currentImageIndex[blockIndex] - 1;

                    if (prevPageIndex < 0)
                        return;

                    self._changePhoto(blockIndex, prevPageIndex);
                });

                self._$nextImageControl[blockIndex].on('click', function () {
                    nextPageIndex = self._currentImageIndex[blockIndex] + 1;
                    imagesCount = self._thumbsImagesCount[blockIndex];

                    if (nextPageIndex > imagesCount)
                        return;

                    self._changePhoto(blockIndex, nextPageIndex);
                });
            }(i));
        }
    },

    _changePhoto: function (blockIndex, imageIndex) {
        var self = this;

        self._setCurrentPhoto(blockIndex, imageIndex);
        self._changePreview(blockIndex, imageIndex);
        self._moveSlider(blockIndex, imageIndex);
        self._handleControls(blockIndex);
    },

    _handleControls: function (blockIndex) {
        var self = this,
            imageIndex = self._currentImageIndex[blockIndex],
            imagesCount = self._thumbsImagesCount[blockIndex],
            imageNum = imageIndex + 1;

        self._$currentImageNum[blockIndex].text(imageNum);

        if (imageIndex > 0) {
            self._$prevImageControl[blockIndex].removeClass(self._disabledClass);
        } else {
            self._$prevImageControl[blockIndex].addClass(self._disabledClass);
        }

        if (imageIndex < imagesCount) {
            self._$nextImageControl[blockIndex].removeClass(self._disabledClass);
        } else {
            self._$nextImageControl[blockIndex].addClass(self._disabledClass);
        }
    },

    _moveSlider: function (blockIndex, imageIndex) {
        var self = this,
            offset = -self._thumbWidth * imageIndex,
            imagesCount = self._thumbsImagesCount[blockIndex];

        if (imagesCount - imageIndex < self._thumbsImagesExtraCount[blockIndex])
            return;

        self._$slider[blockIndex].css('left', offset);
    },

    _changePreview: function (blockIndex, imageIndex) {
        var self = this;

        self._$previewsImages[blockIndex].removeClass(self._activeClass);
        self._$previewsImages[blockIndex].eq(imageIndex).addClass(self._activeClass);
    },

    _setCurrentPhoto: function (blockIndex, imageIndex) {
        var self = this;

        self._currentImageIndex[blockIndex] = imageIndex;
    }
};

var printOut = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$printButtons = $('.js-print-button');
    },

    _bindEvents: function () {
        var self = this;

        self._$printButtons.on('click', function (event) {
            event.preventDefault();
            window.print();
        });
    }
};

var lk = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$deleteButtons = $('.js-delete-button');
        self._$specialButtons = $('.js-special-button');
        self._$updateButtons = $('.js-update-button');
        self._$publishButtons = $('.js-publish-button');

        self._$resumeModal = $('#modal-resume');
    },

    _bindEvents: function () {
        var self = this;

        self._$specialButtons.on('click', function () {
            var cb = function () {
                window.location.reload();
            };

            self._handleAsk($(this), cb);
        });

        self._$deleteButtons.on('click', function () {
            var cb = function () {
                window.location.reload();
            };

            self._handleAsk($(this), cb);
        });

        self._$updateButtons.on('click', function () {
            var cb = function () {
                window.location.reload();
            };

            self._handleAsk($(this), cb);
        });

        self._$publishButtons.on('click', function () {
            var cb = function () {
                window.location.reload();
            };

            self._handleAsk($(this), cb);
        });

        self._$resumeModal.modal({
            show: true
        });
    },

    _handleAsk: function ($button, cb) {
        var self = this,
            question = $button.data('question'),
            ok = $button.data('ok'),
            cancel = $button.data('cancel');

        notify.ask(question, ok, cancel, cb);
    }
};

var subscribe = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$buityCheckboxes = $('.js-beauty-checkbox');
        self._$checkboxes = self._$buityCheckboxes.find('input');

        self._$checkboxes.prop('checked', false);
    },

    _bindEvents: function () {
        var self = this;

        self._$checkboxes.on('change', function () {
            var $this = $(this),
                $parent = $this.parent().parent();

            if ($this.is(':checked')) {
                $parent.addClass('b-active');
            } else {
                $parent.removeClass('b-active');
            }
        });
    }
};

var toggle = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this,
            $toggler,
            length,
            i;

        self._$togglers = $('.js-toggle');

        self._$targets = [];
        self._toggleClasses = [];

        for (i = 0, length = self._$togglers.length; i < length; i++) {
            $toggler = self._$togglers.eq(i);

            self._$targets[i] = $toggler.closest('.js-target');
            self._toggleClasses[i] = self._$targets[i].data('toggle-class');
        }
    },

    _bindEvents: function () {
        var self = this,
            $target,
            $toggle,
            toggleClass;

        self._$togglers.each(function (index) {
            $toggle = $(this);
            (function (index) {
                $toggle.on('click', function () {
                    $target = self._$targets[index];
                    toggleClass = self._toggleClasses[index];

                    $target.toggleClass(toggleClass);
                });
            }(index));
        });
    }
};

var notify = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$notifyQuestionModal = $('#modal-notify-question');
        self._$questionPlace = self._$notifyQuestionModal.find('.js-question');
        self._$cancelButton = self._$notifyQuestionModal.find('.js-cancel');
        self._$okButton = self._$notifyQuestionModal.find('.js-ok');
    },

    _bindEvents: function () {
        var self = this;

        self._$cancelButton.on('click', function () {
            self._$notifyQuestionModal.modal('hide');
        });

        self._$notifyQuestionModal.on('hidden.bs.modal', function () {
            self._clearOkButtonHandlers();
        });
    },

    ask: function (question, ok, cancel, cb) {
        var self = this;

        self._$questionPlace.html(question);
        self._$cancelButton.text(cancel);
        self._$okButton.text(ok);

        self._$notifyQuestionModal.modal('show');

        self._$okButton.on('click', cb);
    },

    _clearOkButtonHandlers: function () {
        var self = this;

        self._$okButton.off('.notify');
    }
};

var selectStylization = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$select = $('.js-select');
    },

    _bindEvents: function () {
        var self = this;

        self._$select.each(function () {
            self._stylizationSelect($(this));
        });
    },

    _stylizationSelect: function ($select) {
        var self = this;

        $select.selectize({
            // вставить нужные опции и колбэки
        });
    }
};

var fileStylization = {
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$inputFiles = $('.js-file');
    },

    _bindEvents: function () {
        var self = this,
            $inputFile;

        self._$inputFiles.each(function () {
            self._initFileStyle($(this));
        });
    },

    _initFileStyle: function ($inputFile) {
        var self = this,
            label = $inputFile.data('label'),
            extraClass = $inputFile.data('class') || null;

        $inputFile.filestyle({
            input: false,
            badge: false,
            buttonText: label,
            extraClass: extraClass || null
        });
    }
};

var radioSwitch = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$radioInputs = $('.js-radio-switch');
    },

    _bindEvents: function () {
        var self = this;

        self._$radioInputs.on('click', function () {
            self._handleClick($(this));
        });
    },

    _handleClick: function ($radio) {
        var self = this,
            $targetClass = $radio.data('target'),
            $targetElements = $('.' + $targetClass),
            targetId = $radio.data('id'),
            $targetElement;

        if (!$targetElements.length)
            return;

        $targetElement = $targetElements.filter('[data-id="' + targetId + '"]');

        if (!$targetElement.length)
            return;

        $targetElements.removeClass(self._activeClass);
        $targetElement.addClass(self._activeClass);
    }
};

var citySelect = {
    _activeClass: 'b-active',
    _offsetTop: 35,
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$win = $(window);

        self._$cityLink = $('.js-city');
        self._$otherCityLink = $('.js-other-city');
        self._$cityNameElem = $('.js-name');

        self._$cityModal = $('#modal-city');
        self._$cityModalDialog = self._$cityModal.find('.js-dialog');

        self._$citiesModal = $('#modal-cities');

        self._citiesInModal = self._$citiesModal.find('.js-item');
    },

    _bindEvents: function () {
        var self = this;

        self._$cityLink.on('click', function () {
            self._handleClick();
        });

        self._$otherCityLink.on('click', function () {
            self._closeCityModal();
            self._openCitiesModal();
        });

        self._$cityModal.on('show.bs.modal', function () {
            self._setCityName();
            self._addPseudoCity();
        });

        self._$cityModal.on('hide.bs.modal', function () {
            self._removePseudoCity();
        });

        self._$win.on('resize scroll', function () {
            self._closeCityModal();
            self._removePseudoCity();
        });

        self._citiesInModal.on('click', function(){
            self._selectCity($(this));
        });
    },

    _handleClick: function () {
        var self = this;

        self._setModalPosition();
        self._openCityModal();
    },

    _setModalPosition: function () {
        var self = this,
            cityLinkOffset = self._getCityLinkOffset();

        self._$cityModalDialog.css({
            top: cityLinkOffset.top + self._offsetTop,
            left: cityLinkOffset.left
        });
    },

    _addPseudoCity: function () {
        var self = this,
            $currentCityLink = self._$cityLink.clone(),
            cityLinkOffset = self._getCityLinkOffset();

        $currentCityLink
            .removeClass('js-city')
            .addClass(self._activeClass + ' js-pseudo-city')
            .css({
                top: cityLinkOffset.top,
                left: cityLinkOffset.left
            })
            .prependTo(self._$cityModal);
    },

    _removePseudoCity: function () {
        var self = this,
            $pseudoCity = self._$cityModal.find('.js-pseudo-city');

        $pseudoCity.remove();
    },

    _getCityLinkOffset: function () {
        var self = this,
            offsetTop = self._$cityLink.offset().top,
            offsetLeft = self._$cityLink.offset().left;

        return {
            top: offsetTop,
            left: offsetLeft
        };
    },

    _selectCity: function ($city) {
        var self = this,
            city = $city.text();

        self._activateCityInList($city);
        self._setCity(city);
        self._closeCitiesModal();
        self._openCityModal();
    },

    _setCityName: function () {
        var self = this,
            city = self._$cityModal.data('city');

        self._$cityNameElem.text(city);
        self._$cityLink.text(city);
    },

    _setCity: function (city) {
        var self = this;

        self._$cityModal.data('city', city);
    },

    _activateCityInList: function ($city) {
        var self = this;

        self._citiesInModal.removeClass(self._activeClass);
        $city.addClass(self._activeClass);
    },

    _closeCityModal: function () {
        var self = this;

        self._$cityModal.modal('hide');
    },

    _openCityModal: function () {
        var self = this;

        self._$cityModal.modal('show');
    },

    _closeCitiesModal: function () {
        var self = this;

        self._$citiesModal.modal('hide');
    },

    _openCitiesModal: function () {
        var self = this;

        self._$citiesModal.modal('show');
    }
};

var managers = {
    _activeClass: 'b-active',
    init: function () {
        var self = this;

        self._collectData();
        self._bindEvents();
    },

    _collectData: function () {
        var self = this;

        self._$form = $('.js-manager-form');
        self._$titlePlace = self._$form.find('.js-title');
        self._$cancel = self._$form.find('.js-cancel');
        self._$addManagerFormLink = $('.js-add-manager');
        self._$editManagerFormLinks = $('.js-edit-manager');

        self._$showFormManagerLinks = $().add(self._$addManagerFormLink).add(self._$editManagerFormLinks);
    },

    _bindEvents: function () {
        var self = this;

        self._$showFormManagerLinks.on('click', function () {
            var $link = $(this),
                title = $link.data('title');

            self._$titlePlace.text(title);
            self._$form.addClass(self._activeClass);
            self._$addManagerFormLink.hide();
        });

        self._$cancel.on('click', function () {
            self._$form.removeClass(self._activeClass);
            self._$addManagerFormLink.show();
        });
    }
};

$(function () {
    radio.init();
    checkbox.init();
    filters.init();
    search.init();
    resume.init();
    lk.init();
    subscribe.init();
    toggle.init();
    selectStylization.init();
    fileStylization.init();
    radioSwitch.init();
    notify.init();
    printOut.init();
    citySelect.init();
    managers.init();
});