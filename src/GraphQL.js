
const QUERY_GET_CUSTOMER = `
query {
  customers (limit: 10) {
    id
    fullname
    email
    created_date
    country
  }
}`;

const MUTATION_UPDATE_CUSTOMER = `
mutation updateCustomer($id: id, $fullname: fullname, $email: email, $country: country) {
  update_user(
    where: {id: {_eq: $id}},
    _set : { fullname: $fullname, email: $email, country: $country }
  ) {
    affected_rows
    returning {
      id
      fullname
      email
      created_date
      country
    }
  }
}`;

const MUTATION_NEW_CUSTOMER = `
mutation newCustomer($id: id, $fullname: fullname) {
  insert_user (
    objects:[{ id: $id, fullname: $fullname }]
  ) {
    returning {
      id
      fullname
    }
  }
}`;

export {
  QUERY_GET_CUSTOMER,
  MUTATION_UPDATE_CUSTOMER,
  MUTATION_NEW_CUSTOMER,
};
