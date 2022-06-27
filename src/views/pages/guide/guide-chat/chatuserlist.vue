<template>
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
</template>    
