<template>
<!-- User Chat -->
<div class="row justify-content-center">
    <div class="col-lg-12">

        <div class="row chat-window">
    
            <!-- Chat User List -->
            <div class="col-lg-5 col-xl-4 chat-cont-left">
                <div class="card mb-sm-3 mb-md-0 contacts_card flex-fill">
                    <div class="card-header chat-search">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="search_btn"><i class="fas fa-search"></i></span>
                            </div>
                            <input type="text" placeholder="Search" class="form-control search-chat rounded-pill">
                        </div>
                    </div>
                    <div class="card-body contacts_body chat-users-list chat-scroll">
                        <a href="javascript:void(0);" class="media d-flex active">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-away">
                                    <img src="../../../../assets/img/provider/provider-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Jeffrey Akridge</div>
                                    <div class="user-last-chat">Hey, How are you?</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">2 min</div>
                                    <div class="badge badge-success badge-pill">15</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media d-flex read-chat">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-online">
                                    <img src="../../../../assets/img/provider/provider-02.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Nancy Olson</div>
                                    <div class="user-last-chat">I'll call you later </div>
                                </div>
                                <div>
                                    <div class="last-chat-time">8:01 PM</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-away">
                                    <img src="../../../../assets/img/provider/provider-03.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Ramona Kingsley</div>
                                    <div class="user-last-chat">Give me a full explanation about our project</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">7:30 PM</div>
                                    <div class="badge badge-success badge-pill">3</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-online">
                                    <img src="../../../../assets/img/provider/provider-04.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Ricardo Lung</div>
                                    <div class="user-last-chat">That's very good UI design</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">6:59 PM</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-offline">
                                    <img src="../../../../assets/img/provider/provider-05.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Annette Silva</div>
                                    <div class="user-last-chat">Yesterday i completed the task</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">11:21 AM</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-online">
                                    <img src="../../../../assets/img/provider/provider-06.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Stephen Wilson</div>
                                    <div class="user-last-chat">What is the major functionality?</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">10:05 AM</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-away">
                                    <img src="../../../../assets/img/provider/provider-07.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Ryan Rodriguez</div>
                                    <div class="user-last-chat">This has allowed me to showcase not only my technical skills</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">Yesterday</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-offline">
                                    <img src="../../../../assets/img/provider/provider-08.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Lucile Devera</div>
                                    <div class="user-last-chat">Let's talk briefly in the evening. </div>
                                </div>
                                <div>
                                    <div class="last-chat-time">Sunday</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-online">
                                    <img src="../../../../assets/img/provider/provider-09.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Roland Storey</div>
                                    <div class="user-last-chat">Do you have any collections? If so, what of?</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">Saturday</div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0);" class="media read-chat d-flex">
                            <div class="media-img-wrap flex-shrink-0">
                                <div class="avatar avatar-away">
                                    <img src="../../../../assets/img/provider/provider-10.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                            </div>
                            <div class="media-body flex-grow-1">
                                <div>
                                    <div class="user-name">Lindsey Parmley</div>
                                    <div class="user-last-chat">Connect the two modules with in 1 day.</div>
                                </div>
                                <div>
                                    <div class="last-chat-time">Friday</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Chat User List -->
            
            <!-- Chat Content -->
            <div class="col-lg-7 col-xl-8 chat-cont-right">
            
                <!-- Chat History -->
                <div class="card mb-0">

                    <div class="card-header msg_head">
                        <div class="d-flex bd-highlight">
                            <a id="back_user_list" href="javascript:void(0)" class="back-user-list">
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <div class="img_cont">
                                <img src="../../../../assets/img/provider/provider-thumb-01.jpg" class="rounded-circle user_img" alt="">
                            </div>
                            <div class="user_info">
                                <span><strong id="receiver_name">Hanifa</strong></span>
                                <p class="mb-0">Messages</p>
                            </div>
                        </div>
                    </div>

                    <div class="card-body msg_card_body chat-scroll">
                        <ul class="list-unstyled">
                            <li class="media sent d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>Hello. What can I do for you?</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:30 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media received d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-02.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>I'm just looking around.</p>
                                            <p>Will you tell me something about yourself?</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:35 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div>
                                            <p>Are you there? That time!</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:40 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div>
                                            <div class="chat-msg-attachments">
                                                <div class="chat-attachment">
                                                    <img src="../../../../assets/img/category/ticket-01.jpg" class="img-fluid" alt="">
                                                    <a href="" class="chat-attach-download">
                                                        <i class="fas fa-download"></i>
                                                    </a>
                                                </div>
                                                <div class="chat-attachment">
                                                    <img src="../../../../assets/img/category/ticket-02.jpg" class="img-fluid" alt="">
                                                    <a href="" class="chat-attach-download">
                                                        <i class="fas fa-download"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:41 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media sent d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>Where?</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:42 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div>
                                            <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:42 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="msg-box">
                                        <div>
                                            <div class="chat-msg-attachments">
                                                <div class="chat-attachment">
                                                    <img src="../../../../assets/img/category/ticket-03.jpg" class="img-fluid" alt="">
                                                    <a href="" class="chat-attach-download">
                                                        <i class="fas fa-download"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:50 AM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media received d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-02.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>You wait for notice.</p>
                                            <p>Consectetuorem ipsum dolor sit?</p>
                                            <p>Ok?</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>8:55 PM</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="chat-date">Today</li>
                            <li class="media received d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>10:17 AM</span>
                                                    </div>
                                                </li>
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media sent d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-02.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <p>Lorem ipsum dollar sit</p>
                                            <div class="chat-msg-actions dropdown">
                                                <a href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fe fe-elipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">Delete</a>
                                                </div>
                                            </div>
                                            <ul class="chat-msg-info">
                                                <li>
                                                    <div class="chat-time">
                                                        <span>10:19 AM</span>
                                                    </div>
                                                </li>
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="media received d-flex">
                                <div class="avatar flex-shrink-0">
                                    <img src="../../../../assets/img/provider/provider-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                                </div>
                                <div class="media-body flex-grow-1">
                                    <div class="msg-box">
                                        <div>
                                            <div class="msg-typing">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    
                    </div>
                    
                    <div class="card-footer">
                        <div class="input-group">
                            <input class="form-control type_msg mh-auto empty_check" placeholder="Type your message...">
                            <button class="btn btn-primary btn_send"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Chat Content -->
            
        </div>
    </div>
</div>
<!-- /User Chat -->
</template>