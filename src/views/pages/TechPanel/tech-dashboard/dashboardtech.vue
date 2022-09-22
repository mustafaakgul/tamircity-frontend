<template>
    <!-- Guide Dashboard -->
    <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
            <div class="dash-widget">
                <div class="dash-widget-inner">
                    <span class="dash-widget-img">
                        <img src="../../../../assets/img/icons/dashboard-icon1.svg" alt="">
                    </span>
                    <div class="dash-widget-info">
                        <p>Bookings</p>
                        <h4>45</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="dash-widget">
                <div class="dash-widget-inner">
                    <span class="dash-widget-img">
                        <img src="../../../../assets/img/icons/dashboard-icon2.svg" alt="">
                    </span>
                    <div class="dash-widget-info">
                        <p>Services</p>
                        <h4>54</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="dash-widget">
                <div class="dash-widget-inner">
                    <span class="dash-widget-img">
                        <img src="../../../../assets/img/icons/dashboard-icon3.svg" alt="">
                    </span>
                    <div class="dash-widget-info">
                        <p>Notifications</p>
                        <h4>78</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12 d-flex">
            <div class="card tech-dashboard-card w-100">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title sub-title">My Bookings</h5>
                    <router-link to="/guide-bookings" class="bookings-link">View all</router-link>
                </div>
                <div class="card-body">
                    <div id="calendar-doctor" class="calendar-container"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="card guide-verify-card w-100">
                <div class="card-body">
                    <div class="card-middle">
                        <div class="card-header-left">
                            <div class="card-avatar non-user-avatar">
                                <span class="guide-avatar-span">
                                    <img src="../../../../assets/img/icons/guide-icon1.svg" alt="Guide-icon">
                                </span>
                            </div>
                            <div class="guide-verify-info">
                                <h4>Verify Your Account</h4>
                                <p>Follow the Steps to verify your Account </p>
                            </div>
                        </div>
                        <div class="guide-verify-link">
                            <router-link to="/guide-settings">Click here</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card guide-verify-card w-100">
                <div class="card-body">
                    <div class="card-middle">
                        <div class="card-header-left">
                            <div class="card-avatar non-user-avatar">
                                <span class="guide-avatar-span">
                                    <img src="../../../../assets/img/icons/guide-icon2.svg" alt="Guide-icon">
                                </span>
                            </div>
                            <div class="guide-verify-info">
                                <h4 class="language-verify-text">Language Verification</h4>
                                <div class="guide-verify-link">
                                    <ul class="guide-test nav">
                                        <li>
                                            <i class="fas fa-check-circle text-success"></i> English
                                            <p><a href="javascript:void(0);" class="text-success">Completed</a></p>
                                        </li>
                                        <li>
                                            <i class="fas fa-times-circle text-danger"></i> বাংলা
                                            <p><a href="javascript:void(0);" class="text-warning">Run Test</a></p>
                                        </li>
                                        <li>
                                            <i class="fas fa-times-circle text-danger"></i> Türkçe
                                            <p><a href="javascript:void(0);" class="text-warning">Run Test</a></p>
                                        </li>
                                        <li>
                                            <i class="fas fa-times-circle text-danger"></i> Urudu
                                            <p><a href="javascript:void(0);" class="text-warning">Run Test</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-8 col-md-12">
            <div class="card guide-verify-card w-100 p-0">
                <div class="card-header">
                    <h5 class="card-title sub-title">Profile completion</h5>
                </div>
                <div class="card-body guide-card-body">
                    <div class="profile-percentage">
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <div class="progress progress-sm">
                                    <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <p>80% Completed</p>
                            </div>
                        </div>
                    </div>
                    <div class="guide-inner-details">
                        <p>Please complete your profile</p>
                        <div class="row align-items-center">
                            <div class="col-md-8">
                                <ul class="nav">
                                    <li><router-link to="/guide-settings"><i class="fas fa-times-circle"></i> Upload Photo</router-link></li>
                                    <li><router-link to="/guide-settings"><i class="fas fa-times-circle"></i> Add Education</router-link></li>
                                    <li><router-link to="/guide-settings"><i class="fas fa-times-circle"></i> Add Document for Verification</router-link></li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <div class="guide-update-link">
                                    <router-link to="/guide-settings">Update Now</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="card guide-verify-card w-100 p-0">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5 class="card-title sub-title">Subscription</h5>
                            <router-link to="/guide-subscription" class="subscription-link">Change Plan</router-link>
                        </div>
                        <div class="card-body">
                            <div class="guide-subscription d-flex justify-content-between align-items-center">
                                <div class="subscription-title">
                                    <h3>Enterprice</h3>
                                    <p>Anually Price</p>
                                </div>
                                <div class="subscription-amount">
                                    <span><i class="fas fa-check-circle"></i></span>
                                    <h3>$1200</h3>
                                    <p>Duration: One Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex">
                    <div class="card w-100">
                        <div class="available-balance available-balance-box">
                            <div class="available-inner">
                                <span class="available-icon">
                                    <i class="fas fa-dollar-sign"></i>
                                </span>
                                <div class="available-details">
                                    <p class="d-flex align-items-center">Available Balance 
                                        <a href="javascript:void(0);" class="ms-2" data-bs-toggle="modal" data-bs-target="#add-wallet"><i class="fas fa-pencil"></i>
                                        </a>
                                    </p>
                                    <h4>$250.60</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="available-content available-price-content">
                                    <p>Total Debit : <span>$500.00</span></p>
                                </div>
                                <div class="available-content available-price-content">
                                    <p>Total Credit : <span>$600.00</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 d-flex">
            <div class="card guide-available-widget w-100">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="card-title sub-title">
                        <img src="../../../../assets/img/icons/available-icon.svg" class="me-2" alt=""> 
                        Guide Availability
                    </h5>
                    <router-link to="/guide-availability">Edit Time</router-link>
                </div>
                <div class="card-body">
                    <ul>
                        <li><span>Monday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Tuesday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Wednesday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Thursday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Friday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Saturday</span>9:30 AM - 7:00 PM</li>
                        <li><span>Sunday</span>9:30 AM - 7:00 PM</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- /Guide Dashboard -->
    </template>
    <script>
        import simpleCalendar from 'simple-calendar'
        
        export default {
            components: {
            },
            data() {
                return {
                }
            },
            mounted() {
             // Create the defaults once
          var pluginName = "simpleCalendar",
            defaults = {
              months: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'], //string of months starting from january
              days: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'], //string of days starting from sunday
              displayYear: true, // display year in header
              fixedStartDay: true, // Week begin always by monday or by day set by number 0 = sunday, 7 = saturday, false = month always begin by first day of the month
              displayEvent: true, // display existing event
              disableEventDetails: false, // disable showing event details
              disableEmptyDetails: false, // disable showing empty date details
              events: [], // List of event
              onInit: function (calendar) {}, // Callback after first initialization
              onMonthChange: function (month, year) {}, // Callback on month change
              onDateSelect: function (date, events) {}, // Callback on date selection
              onEventSelect: function () {},              // Callback fired when an event is selected     - see $(this).data('event')
              onEventCreate: function( $el ) {},          // Callback fired when an HTML event is created - see $(this).data('event')
              onDayCreate:   function( $el, d, m, y ) {}  // Callback fired when an HTML day is created   - see $(this).data('today'), .data('todayEvents')
            };
        
          // The actual plugin constructor
          function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.currentDate = new Date();
            this.init();
          }
        
          // Avoid Plugin.prototype conflicts
          $.extend(Plugin.prototype, {
            init: function () {
              var container = $(this.element);
              var todayDate = this.currentDate;
        
              var calendar = $('<div class="calendar"></div>');
              var header = $('<header>' +
                '<h2 class="month"></h2>' +
                '<a class="simple-calendar-btn btn-prev" href="javascript:void(0);"></a>' +
                '<a class="simple-calendar-btn btn-next" href="javascript:void(0);"></a>' +
                '</header>');
        
              this.updateHeader(todayDate, header);
              calendar.append(header);
        
              this.buildCalendar(todayDate, calendar);
              container.append(calendar);
        
              this.bindEvents();
              this.settings.onInit(this);
            },
        
            //Update the current month header
            updateHeader: function (date, header) {
              var monthText = this.settings.months[date.getMonth()];
              monthText += this.settings.displayYear ? ' <div class="year">' + date.getFullYear() : '</div>';
              header.find('.month').html(monthText);
            },
        
            //Build calendar of a month from date
            buildCalendar: function (fromDate, calendar) {
              var plugin = this;
        
              calendar.find('table').remove();
        
              var body = $('<table></table>');
              var thead = $('<thead></thead>');
              var tbody = $('<tbody></tbody>');
        
              //setting current year and month
              var y = fromDate.getFullYear(), m = fromDate.getMonth();
        
              //first day of the month
              var firstDay = new Date(y, m, 1);
              //last day of the month
              var lastDay = new Date(y, m + 1, 0);
              // Start day of weeks
              var startDayOfWeek = firstDay.getDay();
        
              if (this.settings.fixedStartDay !== false) {
                // Backward compatibility
                startDayOfWeek =  this.settings.fixedStartDay ? 1 : this.settings.fixedStartDay;
        
                // If first day of month is different of startDayOfWeek
                while (firstDay.getDay() !== startDayOfWeek) {
                  firstDay.setDate(firstDay.getDate() - 1);
                }
                // If last day of month is different of startDayOfWeek + 7
                while (lastDay.getDay() !== ((startDayOfWeek + 7) % 7)) {
                  lastDay.setDate(lastDay.getDate() + 1);
                }
              }
        
              //Header day in a week ( (x to x + 7) % 7 to start the week by monday if x = 1)
              for (var i = startDayOfWeek; i < startDayOfWeek + 7; i++) {
                thead.append($('<td>' + this.settings.days[i % 7].substring(0, 3) + '</td>'));
              }
        
              //For firstDay to lastDay
              for (var day = firstDay; day <= lastDay; day.setDate(day.getDate())) {
                var tr = $('<tr></tr>');
                //For each row
                for (var i = 0; i < 7; i++) {
                  var td = $('<td><div class="day" data-date="' + day.toISOString() + '">' + day.getDate() + '</div></td>');
        
                  var $day = td.find('.day');
        
                  //if today is this day
                  if (day.toDateString() === (new Date).toDateString()) {
                    $day.addClass("today");
                  }
        
                  //if day is not in this month
                  if (day.getMonth() != fromDate.getMonth()) {
                    $day.addClass("wrong-month");
                  }
        
                  // filter today's events
                  var todayEvents = plugin.getDateEvents(day);
        
                  if (todayEvents.length && plugin.settings.displayEvent) {
                    $day.addClass(plugin.settings.disableEventDetails ? "has-event disabled" : "has-event");
                  } else {
                    $day.addClass(plugin.settings.disableEmptyDetails ? "disabled" : "");
                  }
        
                  // associate some data available from the onDayCreate callback
                  $day.data( 'todayEvents', todayEvents );
        
                  // simplify further customization
                  this.settings.onDayCreate( $day, day.getDate(), m, y );
        
                  tr.append(td);
                  day.setDate(day.getDate() + 1);
                }
                tbody.append(tr);
              }
        
              body.append(thead);
              body.append(tbody);
        
              var eventContainer = $('<div class="event-container"><div class="close"></div><div class="event-wrapper"></div></div>');
        
              calendar.append(body);
              calendar.append(eventContainer);
            },
            changeMonth: function (value) {
              this.currentDate.setMonth(this.currentDate.getMonth() + value, 1);
              this.buildCalendar(this.currentDate, $(this.element).find('.calendar'));
              this.updateHeader(this.currentDate, $(this.element).find('.calendar header'));
              this.settings.onMonthChange(this.currentDate.getMonth(), this.currentDate.getFullYear())
            },
            //Init global events listeners
            bindEvents: function () {
              var plugin = this;
        
              //Click previous month
              $(plugin.element).on('click', '.btn-prev', function ( e ) {
                plugin.changeMonth(-1)
                e.preventDefault();
              });
        
              //Click next month
              $(plugin.element).on('click', '.btn-next', function ( e ) {
                plugin.changeMonth(1);
                e.preventDefault();
              });
        
              //Binding day event
              $(plugin.element).on('click', '.day', function (e) {
                var date = new Date($(this).data('date'));
                var events = plugin.getDateEvents(date);
                if (!$(this).hasClass('disabled')) {
                  plugin.fillUp(e.pageX, e.pageY);
                  plugin.displayEvents(events);
                }
                plugin.settings.onDateSelect(date, events);
              });
        
              //Binding event container close
              $(plugin.element).on('click', '.event-container .close', function (e) {
                plugin.empty(e.pageX, e.pageY);
              });
            },
            displayEvents: function (events) {
              var plugin = this;
              var container = $(this.element).find('.event-wrapper');
        
              events.forEach(function (event) {
                var startDate = new Date(event.startDate);
                var endDate = new Date(event.endDate);
                var $event = $('' +
                  '<div class="event">' +
                  ' <div class="event-hour">' + startDate.getHours() + ':' + (startDate.getMinutes() < 10 ? '0' : '') + startDate.getMinutes() + '</div>' +
                  ' <div class="event-date">' + plugin.formatDateEvent(startDate, endDate) + '</div>' +
                  ' <div class="event-summary">' + event.summary + '</div>' +
                  '</div>');
        
                $event.data( 'event', event );
                $event.click( plugin.settings.onEventSelect );
        
                // simplify further customization
                plugin.settings.onEventCreate( $event );
        
                container.append($event);
              })
            },
            //Small effect to fillup a container
            fillUp: function (x, y) {
              var plugin = this;
              var elem = $(plugin.element);
              var elemOffset = elem.offset();
        
              var filler = $('<div class="filler" style=""></div>');
              filler.css("left", x - elemOffset.left);
              filler.css("top", y - elemOffset.top);
        
              elem.find('.calendar').append(filler);
        
              filler.animate({
                width: "300%",
                height: "300%"
              }, 500, function () {
                elem.find('.event-container').show();
                filler.hide();
              });
            },
            //Small effect to empty a container
            empty: function (x, y) {
              var plugin = this;
              var elem = $(plugin.element);
              var elemOffset = elem.offset();
        
              var filler = elem.find('.filler');
              filler.css("width", "300%");
              filler.css("height", "300%");
        
              filler.show();
        
              elem.find('.event-container').hide().find('.event').remove();
        
              filler.animate({
                width: "0%",
                height: "0%"
              }, 500, function () {
                filler.remove();
              });
            },
            getDateEvents: function (d) {
              var plugin = this;
              return plugin.settings.events.filter(function (event) {
                return plugin.isDayBetween(d, new Date(event.startDate), new Date(event.endDate));
              });
            },
            isDayBetween: function (d, dStart, dEnd) {
              dStart.setHours(0,0,0);
              dEnd.setHours(23,59,59,999);
              d.setHours(12,0,0);
        
              return dStart <= d && d <= dEnd;
            },
            formatDateEvent: function (dateStart, dateEnd) {
              var formatted = '';
              formatted += this.settings.days[dateStart.getDay()] + ' - ' + dateStart.getDate() + ' ' + this.settings.months[dateStart.getMonth()].substring(0, 3);
        
              if (dateEnd.getDate() !== dateStart.getDate()) {
                formatted += ' to ' + dateEnd.getDate() + ' ' + this.settings.months[dateEnd.getMonth()].substring(0, 3)
              }
              return formatted;
            }
          });
        
          // A really lightweight plugin wrapper around the constructor,
          // preventing against multiple instantiations
          $.fn[pluginName] = function (options) {
            return this.each(function () {
              if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
              }
            });
          };
        
 
        
                $("#calendar-doctor").simpleCalendar({
                fixedStartDay: 0, // begin weeks by sunday
                disableEmptyDetails: true,
                events: [
                    // generate new event after tomorrow for one hour
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                        endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                        summary: 'Conference with teachers'
                    },
                    // generate new event for yesterday at noon
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
                        endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
                        summary: 'Old classes'
                    },
                    // generate new event for the last two days
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
                        endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                        summary: 'Old Lessons'
                    }
                ],
        
            });
            
            }
        }
        </script>
        