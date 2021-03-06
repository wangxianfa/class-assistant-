import {
  request_get,
  request_post,
  request_put
} from '@/common/js/request'

const API_CONFIG = '/api/chatgroup'

/**
 * [get_message 获取用户的群聊消息]
 * @param  {[type]} userId      [用户ID]
 * @param  {[type]} otherUserId [群id]
 * @return {[type]}             [description]
 */
export const get_message = async (userId, groupId) => {
  const url = `${API_CONFIG}/message/${userId}/${groupId}`
  const result = await request_get(url)
  return result
}

/**
 * [update_enter_chat 按返回时要更新状态]
 * @param  {[type]} userId      [用户ID]
 * @param  {[type]} otherUserId [群id]
 * @return {[type]}             [description]
 */
export const update_enter_chat = async (userId, groupId) => {
  const url = `${API_CONFIG}/update_enter_chat/${userId}/${groupId}`
  const result = await request_put(url)
  return result
}

/**
 * [send_message 发送消息]
 * @param  {[type]} data [数据]
 * @return {[type]}      [description]
 */
export const send_message = async (data) => {
  const options = {
    method: 'post',
    baseURL: '/api',
    url: '/chatgroup/sendmessage',
    data: data
  }
  const result = await request_post(options)
  return result
}
