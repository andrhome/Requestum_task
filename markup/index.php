<?php
    require __DIR__ . "/model.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Requestom task</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,300,500&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:500' rel='stylesheet' type='text/css'>
</head>
<body>
    <div id="wrapper">
        <main id="main-content">
            <div class="container">
                <div class="row goods-list">
                    <?php foreach (getItems(1, 4) as $item): ?>
                        <div class="col-md-3 col-sm-6">
                            <div class="good">
                                <div class="img-holder">
                                    <img src="<?php echo $item['img']; ?>" alt="<?php echo $item['title']; ?>">
                                </div>                                        
                                <div class="description-block">
                                    <div class="title"><?php echo $item['title']; ?></div>
                                    <div class="description"><?php echo $item['description']; ?></div>
                                    <div class="discount-cost">
                                        $<?php echo $item['discountCost'] ? $item['discountCost'] : $item['cost']; ?>
                                    </div>
                                <?php if ($item['discountCost'] !== null): ?>
                                    <strike class="cost">$<?php echo $item['cost']; ?></strike>
                                    <div class="sale">Sale</div>
                                <?php endif; ?>
                                <?php if ($item['new']): ?>
                                    <div class="new">New</div>
                                <?php endif; ?>
                                </div>
                                <div class="links-holder">
                                    <a href="#" class="add">Add to cart</a>
                                    <a href="#" class="view">View</a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div class="load-more-holder">
                <a href="#" class="load-more" onclick="return false">Load more</a>
            </div>
        </main>
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="item">
                            <h2>Hot offers</h2>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hend.</p>
                            <ul>
                                <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                                <li>Nam elit magna hendrerit sit amet tincidunt ac</li>
                                <li>Quisque diam lorem interdum vitae dapibus ac scele</li>
                                <li>Donec eget tellus non erat lacinia fermentum</li>
                                <li>Donec in velit vel ipsum auctor pulvin</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="item">
                            <h2>Hot offers</h2>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hend.</p>
                            <ul>
                                <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                                <li>Nam elit magna hendrerit sit amet tincidunt ac</li>
                                <li>Quisque diam lorem interdum vitae dapibus ac scele</li>
                                <li>Donec eget tellus non erat lacinia fermentum</li>
                                <li>Donec in velit vel ipsum auctor pulvin</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <div class="item">
                            <h2>Store information</h2>
                            <div class="info-list">
                                <div class="info-row">
                                    <i class="fa fa-map-marker"></i>
                                    <span>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</span>
                                </div>
                                <div class="info-row">
                                    <i class="fa fa-phone"></i>
                                    <span>Call us now toll free: <a href="tel:80023456789"> (800) 2345-6789</a></span>
                                </div>
                                <div class="info-row">
                                    <i class="fa fa-envelope-o"></i>
                                    <span>Customer support: <a href="mailto: support@example.com"> support@example.com</a><br>
                                    Press: <a href="mailto: pressroom@example.com"> pressroom@example.com</a></span>
                                </div>
                                <div class="info-row">
                                    <i class="fa fa-skype" aria-hidden="true"></i>
                                    <span>Skype: sample-username</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="js/main.js"></script>  
</body>
</html>