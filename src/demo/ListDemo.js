import React, {useEffect} from 'react'
import useTitle from './useTitle'
import {Checkbox, List, Icon} from '../lib'

const ListDemo = () => {
    const [, setTitle] = useTitle()
    useEffect(() => setTitle('List'))

    function handleClick() {

    }

    return (
        <>
            <h1>Single-line</h1>
            <div>
                <List>
                    <List.ListItem>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Single-line item longer text</List.Title>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Icon>
                            <Icon name="search" />
                        </List.Icon>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox1" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Action>
                            <Checkbox label="" id="checkbox2" />
                        </List.Action>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Avatar circle>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image1" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox3" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Avatar large>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image2" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Single-line item</List.Title>
                        </List.Content>
                        <List.Icon right>
                            <Icon name="search" />
                        </List.Icon>
                    </List.ListItem>

                    <List.Divider />

                    <h1>Two-line</h1>

                    <List.ListItem>
                        <List.Content>
                            <List.Overline>OVERLINE</List.Overline>
                            <List.Title>Two-line text</List.Title>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Two-line item longer text</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Icon>
                            <Icon name="search" />
                        </List.Icon>
                        <List.Content>
                            <List.Title>Two-line item</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Two-line item</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox4" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Action>
                            <Checkbox label="" id="checkbox5" />
                        </List.Action>
                        <List.Content>
                            <List.Title>Two-line item</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Avatar circle>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image3" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Two-line item</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox6" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem onClick={handleClick}>
                        <List.Avatar large>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image4" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Two-line item</List.Title>
                            <List.Subtitle>Secondary text</List.Subtitle>
                        </List.Content>
                        <List.Icon right>
                            <Icon name="search" />
                        </List.Icon>
                    </List.ListItem>

                    <List.Divider />

                    <h1>Three-line</h1>

                    <List.ListItem>
                        <List.Content>
                            <List.Overline>OVERLINE</List.Overline>
                            <List.Title>Three-line text</List.Title>
                            <List.Subtitle>Secondary line text</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Three-line item longer text</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Icon>
                            <Icon name="search" />
                        </List.Icon>
                        <List.Content>
                            <List.Title>Three-line item</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Content>
                            <List.Title>Three-line item</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox7" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Action>
                            <Checkbox label="" id="checkbox8" />
                        </List.Action>
                        <List.Content>
                            <List.Title>Three-line item</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                    </List.ListItem>

                    <List.ListItem>
                        <List.Avatar circle>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image5" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Three-line item</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                        <List.Action right>
                            <Checkbox label="" id="checkbox9" />
                        </List.Action>
                    </List.ListItem>

                    <List.ListItem onClick={handleClick}>
                        <List.Avatar large>
                            <img src="http://mediacaolfg.com.br/wp-content/uploads/2016/10/16_colorida-250x250.jpg" alt="image6" />
                        </List.Avatar>
                        <List.Content>
                            <List.Title>Three-line item</List.Title>
                            <List.Subtitle>Secondary line text Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</List.Subtitle>
                        </List.Content>
                        <List.Icon right>
                            <Icon name="search" />
                        </List.Icon>
                    </List.ListItem>

                </List>
            </div>
            <pre>{`

            `}</pre>
        </>
    )
}

export default ListDemo
