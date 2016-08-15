
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.increments('id');
    table.integer('user_id');
    table.string('name');
    table.string('phone');
    table.string('email');
    table.string('relationship');
    table.integer('frequency_of_contact');
    table.text('notes');
    table.timestamp('last_contact');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
