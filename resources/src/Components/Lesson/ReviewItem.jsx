export default function ReviewItem() {
    return (
        <Paper
            key={item.id}
            elevation={2}
            style={{
                marginBottom: theme.spacing(2),
                padding: theme.spacing(1),
                boxSizing: 'border-box',
            }}
        >
            <div className={classes.reviewContent}>
                <Avatar src={item.avatar} />
                <Typography
                    variant="body2"
                    component="span"
                    style={{ flexGrow: 1 }}
                >
                    {item.author}: {item.text}
                </Typography>
                {item.author === `${profile.firstName} ${profile.lastName}` ? (
                    <CardActions>
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                        <IconButton
                            id={item.id}
                            onClick={(event) =>
                                handleDeleteReview(event, item.id)
                            }
                        >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                ) : null}
            </div>
        </Paper>
    )
}
