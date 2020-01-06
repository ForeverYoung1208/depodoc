
/*

converted from coffeescript, so messy code.
btw, my first experience on javascripe oop, so double messy code )))

 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

class Roles {
	constructor(){
		this.jqxhr = $.get("roles.json")
			.done(res=> {
				return this.data = res;
		});
	}
	getRoleById(id){
		for (let role of Array.from(this.data)) {
			if (role.id === id) {
				return role;
			}
		}
	}
}

class Users {
	static initClass() {
		this.instances=[];
	}
	constructor(id, allRoles){
		this.redrawTo = this.redrawTo.bind(this);
		this.setActions = this.setActions.bind(this);
		this.drawRolesforUsers = this.drawRolesforUsers.bind(this);
		this.deleteRoleFromUser = this.deleteRoleFromUser.bind(this);
		this.getById = this.getById.bind(this);
		this.deleteRoleFromAll = this.deleteRoleFromAll.bind(this);
		this.addRoleToAll = this.addRoleToAll.bind(this);
		this.save = this.save.bind(this);
		this.data = [];
		this.element_id = id;
		// this.constructor.instances<<this;
		this.instances<<this;
		this.allRoles = allRoles;
	}

	getAndShow(){
		let jqxhr;
		return jqxhr = $.get("users.json")
			.done(res=> {
				this.data = res;
				return this.redrawTo( $(this.element_id) );
		}); 
	}
	redrawTo(el){
		const inTag1 = el.attr('inTag1');
		const inTag2 = el.attr('inTag2');
		let res = '';
		for (let user of Array.from(this.data)) { 
			(user=> {
				return res +='<'+inTag1+'>' + 
					'<'+inTag2+'>' + user.id + '</'+inTag2+'>' + 
					'<'+inTag2+'>' + user.name + '</'+inTag2+'>' + 
					'<'+inTag2+'>' + user.email + '</'+inTag2+'>' + 
					'<'+inTag2+' class = "userRoles rounded droppable" data-uid="'+user.id+'"> Querying roles.... </'+inTag2+'>' + 
					'</'+inTag1 + '>';
			})(user);
		}
		el.html( res );
		this.drawRolesforUsers(this.data);
		return this.setActions(el);
	}
	setActions(el){
		const self = this;
		return el.find(".droppable").droppable({
			drop(event, ui){
				const uid = parseInt( $(this).attr('data-uid') );
				const rid = parseInt( ui.draggable.attr('data-rid') );
				const user = self.getById( uid );
				if (!(Array.from(user.roles).includes(rid))) { user.roles.push( rid ); }
				return self.drawRolesforUsers([user]);
			}
		});
	}
	drawRolesforUsers(users){
		let res = '';
		let elRole;
		const self = this;
		for (let user of users) {
			$(this.element_id).find("[data-uid='" + user.id + "']").empty()
			res = '';
			elRole = null;
			if (user.roles) {
				for (let role_id of user.roles) { 
					res += '<span class="badge badge-pill badge-info" data-rid="'+role_id
					res += '" data-uid="'+	user.id+'" >'; 

					res += role_id+' ' +	this.allRoles.getRoleById(role_id).name + ' <i class="fa fa-2x fa-trash deletable"></i>';
					res += '</span>';
					elRole = $(res)
					elRole.on('click', function(e){

						console.log(role_id)
						console.log(user.id)
						self.deleteRoleFromUser(role_id, user.id);
						self.drawRolesforUsers( [self.getById(user.id)]);
					});		
				}					
				$(this.element_id).find("[data-uid='" + user.id + "']").append(elRole);
			}
		}
	}
	deleteRoleFromUser(role_id, user_id) {
		const user = this.getById(user_id);
		const i = user.roles.indexOf(role_id);
		if (i >= 0) { return user.roles.splice(i,1); }
	}
	getById(user_id){
		for (let user of Array.from(this.data)) {
			if (user.id === user_id) {
				return user;
			}
		}
	}
	deleteRoleFromAll(rid){
		for (let user of Array.from(this.data)) {
			const i = user.roles.indexOf(rid);
			if (i >= 0) { user.roles.splice(i,1); }
		}
		return this.drawRolesforUsers(this.data);
	}
	addRoleToAll(rid) {
		for (let user of Array.from(this.data)) {
			if (!(Array.from(user.roles).includes(rid))) { user.roles.push(rid); }
		}
		return this.drawRolesforUsers(this.data);
	}
	save(){
		return $.ajax({
			type : "POST",
			url : "users.json",
			dataType: 'json',
			contentType: 'application/json',
			data : JSON.stringify(this.data),
			complete( response, status){
				if (status ==='success') {
					return $("#dialog-saved").dialog( "open" );
				}
			}

		});
	}
}
Users.initClass();





$(document).ready(function() {
	if (($('meta[name=psj]').attr('controller')==='users') && ($('meta[name=psj]').attr('action')==='index')) {


		const allRoles = new Roles();
		allRoles.jqxhr.then(function(){
			window.allUsers = new Users('#ajaxUsers', allRoles);
			allUsers.getAndShow();
			$('#btnSave').on("click", allUsers.save);
			return $('#btnCancel').on("click", cancelDialog);
		});


		window.cancelDialog = () => $("#dialog-confirm-cancel").dialog( "open" );

		$('.draggable').draggable({
			helper: 'clone'
		});
		$('.deleteArea.droppable').droppable({
			drop(event, ui) {
				const rid = parseInt( ui.draggable.attr('data-rid') );
				return allUsers.deleteRoleFromAll( rid );
			}
		});
		$('.addArea.droppable').droppable({
			drop(event, ui) {
				const rid = parseInt( ui.draggable.attr('data-rid') );
				return allUsers.addRoleToAll( rid );
			}
		});

		$("#dialog-confirm-cancel").dialog({
			resizable: false,
			autoOpen: false,
			height: "auto",
			width: 400,
			modal: true,
			dialogClass: "no-close",
			hide: { 
				effect: "fade",
				duration: 500
			},
			show: { 
				effect: "fade",
				duration: 500
			},
			buttons: {
				"Скасувати"(){
					$( this ).dialog( "close" );
					return allUsers.getAndShow();
				},
				"Назад (Не скасовувати)"(){
					return $( this ).dialog( "close" );
				}
			}
		});

		return $("#dialog-saved").dialog({
			resizable: false,
			autoOpen: false,
			height: "auto",
			width: 400,
			modal: true,
			dialogClass: "no-close",
			hide: { 
				effect: "fade",
				duration: 500
			},
			show: { 
				effect: "fade",
				duration: 500
			},
			buttons: {
				"Ok"(){
					return $( this ).dialog( "close" );
				}
			}
		});
	}
});

	



		

