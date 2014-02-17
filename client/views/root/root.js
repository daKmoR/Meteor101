Meteor.subscribe('items-public');

Template.root.items = function() {
	return Items.find({}, {sort: {createdAt: 1}});
};

Template.root.hasTheme = function(theme) {
	return Session.get('theme') === theme;
};

Template.root.events({
	'keypress .new-item': function(event) {
		if (event.keyCode === 13 && event.shiftKey === false) { //Enter without shift
			var area = $(event.target);

			Items.insert({
				name: area.val(),
				public: !$('.new-item-private')[0].checked
			});

			Textarea.reset(area);
		}
	},
	'click .remove-item': function(event) {
		Items.remove(this._id);
	}
});