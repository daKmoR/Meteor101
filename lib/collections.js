Items = new Meteor.Collection('items');

Items.allow({
	insert: function() {
		return true;
	},
	update: function() {
		return true;
	},
	remove: function() {
		return true;
	}
});

// current workaround to always set createdAt and modifiedAt on the SERVER
// Offline Apps might need a different approach
Items.deny({
	insert: function(userId, doc) {
		doc.createdAt = new Date().valueOf();
		doc.modifiedAt = doc.createdAt;
		return false;
	},
	update: function(userId, doc) {
		doc.modifiedAt = new Date().valueOf();
		return false;
	}
});