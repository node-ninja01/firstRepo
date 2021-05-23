class validator {
  static userId(uid) {
    let result = {
      status: true,
    };

    if (!uid || !Number.isInteger(uid)) {
      result.msg = 'userId is not valid';
      result.status = false;
    }

    return result;
  }
}

module.exports = validator;
