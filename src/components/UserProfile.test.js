/**
 * skenario testing
 *
 * UserProfile component :
 * Jika diberikan nilainya pada props maka harus menampilkan komponen berikut :
 * - Profile picture (img)
 * - User name (p{username})
 * - date (p{date})
 * - hashTag (p#{hashtag})
 * - reply to (p{replyto})
 * - score (p{score})
 */
import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

describe('UserProfile Component', () => {
  it('harus menampilkan komponen Profile picture (img) Jika diberikan nilainya pada props', async () => {
    // Arrange
    const dummyPicture = 'dummy'
    render(<UserProfile profilePicture={dummyPicture}/>)
    const profilePictureElement = await screen.getAllByAltText('')

    // Action
    // no action needed for this tes

    // Assert
    expect(profilePictureElement).toBeInTheDocument
  })

  it('harus menampilkan komponen user name, date, hashtag, reply to dan score Jika diberikan nilainya pada props', async () => {
    // Arrange
    const userName = 'Khumairah'
    const date = 'Jan 1, 2021'
    const hashTag = 'test'
    const replyTo = 'Rizkia'
    const score = 100
    const { getByText } = render(<UserProfile
      userName={userName}
      date={date}
      hashTag={hashTag}
      replyTo={replyTo}
      score={score}
    />)
    const name = getByText(userName)
    const dateElement = getByText(date)
    const tag = getByText(`#${hashTag}`)
    const reply = getByText(`Reply to: @${replyTo}`)
    const scoreElement = getByText(score.toString())

    // Action
    // no action needed for this tes

    // Assert
    expect(name).toBeInTheDocument
    expect(dateElement).toBeInTheDocument
    expect(tag).toBeInTheDocument
    expect(reply).toBeInTheDocument
    expect(scoreElement).toBeInTheDocument
  })
})
