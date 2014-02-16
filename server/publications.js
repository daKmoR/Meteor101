Meteor.publish('items-public', function () {
	return Items.find({public: true});
});

Meteor.publish('items-all', function () {
	return Items.find({});
});