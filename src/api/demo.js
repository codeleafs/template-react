/**
 * Copyright 2018-present, company, Inc
 *
 * This source code is licensed under the MIT LICENSE found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

import fetcher from 'assets/js/fetcher'

/**
 * say hello
 */
export function sayHello() {
  return fetcher.get('/api/say/hello')
}